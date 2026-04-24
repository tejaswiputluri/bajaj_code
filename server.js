const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Update these with your actual credentials
const USER_ID = "tejaswiputluri_06072006"; // Format: fullname_ddmmyyyy
const EMAIL_ID = "tejaswi_putluri@srmap.edu.in";
const COLLEGE_ROLL_NUMBER = "AP23110010532";

// Main API endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'data must be an array' });
    }

    const result = processHierarchy(data);

    res.json({
      user_id: USER_ID,
      email_id: EMAIL_ID,
      college_roll_number: COLLEGE_ROLL_NUMBER,
      hierarchies: result.hierarchies,
      invalid_entries: result.invalid_entries,
      duplicate_edges: result.duplicate_edges,
      summary: result.summary
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Serve static frontend files
app.use(express.static('public'));

// Process the hierarchy data
function processHierarchy(data) {
  const invalid_entries = [];
  const duplicate_edges = [];
  const seen_edges = new Set();
  const processed_edges = []; // Valid, non-duplicate edges
  const parent_map = new Map(); // Track parent of each node (first parent wins)

  // Step 1: Validate and collect edges
  for (const entry of data) {
    const trimmed = entry.trim();

    // Validate format
    if (!isValidNodeFormat(trimmed)) {
      invalid_entries.push(entry);
      continue;
    }

    // Check for duplicate
    if (seen_edges.has(trimmed)) {
      duplicate_edges.push(trimmed);
      continue;
    }

    seen_edges.add(trimmed);
    processed_edges.push(trimmed);
  }

  // Step 2: Build graph
  const graph = new Map(); // adjacency list: parent -> [children]
  const all_nodes = new Set();

  for (const edge of processed_edges) {
    const [parent, child] = edge.split('->');

    // Handle multi-parent case: first parent wins
    if (!parent_map.has(child)) {
      parent_map.set(child, parent);
      if (!graph.has(parent)) {
        graph.set(parent, []);
      }
      graph.get(parent).push(child);
    }

    all_nodes.add(parent);
    all_nodes.add(child);
  }

  // Step 3: Find connected components and build trees
  const visited = new Set();
  const hierarchies = [];

  for (const start_node of all_nodes) {
    if (visited.has(start_node)) continue;

    // Get the connected component
    const component = getComponent(start_node, graph, parent_map, all_nodes);
    component.forEach(node => visited.add(node));

    // Find the root of this component (node with no parent in component)
    let root = null;
    for (const node of component) {
      if (!parent_map.has(node) || !component.has(parent_map.get(node))) {
        root = node;
        break;
      }
    }

    // If no root found (pure cycle), use lexicographically smallest node
    if (!root) {
      root = Array.from(component).sort()[0];
    }

    // Detect cycles and build tree
    const { tree, has_cycle } = buildTree(root, graph, component);

    if (has_cycle) {
      hierarchies.push({
        root: root,
        tree: {},
        has_cycle: true
      });
    } else {
      const depth = calculateDepth(root, tree);
      hierarchies.push({
        root: root,
        tree: tree,
        depth: depth
      });
    }
  }

  // Step 4: Calculate summary
  const total_trees = hierarchies.filter(h => !h.has_cycle).length;
  const total_cycles = hierarchies.filter(h => h.has_cycle).length;

  let largest_tree_root = '';
  let max_depth = 0;

  for (const hierarchy of hierarchies) {
    if (!hierarchy.has_cycle && hierarchy.depth > max_depth) {
      max_depth = hierarchy.depth;
      largest_tree_root = hierarchy.root;
    } else if (!hierarchy.has_cycle && hierarchy.depth === max_depth && hierarchy.root < largest_tree_root) {
      largest_tree_root = hierarchy.root;
    }
  }

  // Remove duplicate edges that might have been counted twice
  const unique_duplicates = Array.from(new Set(duplicate_edges));

  return {
    hierarchies: hierarchies,
    invalid_entries: invalid_entries,
    duplicate_edges: unique_duplicates,
    summary: {
      total_trees: total_trees,
      total_cycles: total_cycles,
      largest_tree_root: largest_tree_root || ''
    }
  };
}

// Validate node format: X->Y where X and Y are single uppercase letters
function isValidNodeFormat(entry) {
  if (typeof entry !== 'string' || entry.length === 0) {
    return false;
  }

  const pattern = /^[A-Z]->[A-Z]$/;
  if (!pattern.test(entry)) {
    return false;
  }

  const [parent, child] = entry.split('->');
  // Self-loop is invalid
  if (parent === child) {
    return false;
  }

  return true;
}

// Build tree structure from root and detect cycles
function buildTree(root, graph, component) {
  const visited = new Set();
  const rec_stack = new Set();
  let has_cycle = false;

  function dfs(node) {
    visited.add(node);
    rec_stack.add(node);

    const tree_obj = {};

    if (graph.has(node)) {
      const children = graph.get(node);
      for (const child of children) {
        if (!component.has(child)) continue;

        if (rec_stack.has(child)) {
          // Cycle detected
          has_cycle = true;
          return {};
        }

        tree_obj[child] = dfs(child);
      }
    }

    rec_stack.delete(node);
    return tree_obj;
  }

  const tree = { [root]: dfs(root) };

  return {
    tree: tree,
    has_cycle: has_cycle
  };
}

// Get connected component using BFS
function getComponent(start, graph, parent_map, all_nodes) {
  const component = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    if (component.has(node)) continue;

    component.add(node);

    // Add children
    if (graph.has(node)) {
      for (const child of graph.get(node)) {
        if (!component.has(child) && all_nodes.has(child)) {
          queue.push(child);
        }
      }
    }

    // Add parent
    if (parent_map.has(node)) {
      const parent = parent_map.get(node);
      if (!component.has(parent) && all_nodes.has(parent)) {
        queue.push(parent);
      }
    }
  }

  return component;
}

// Calculate depth (longest root-to-leaf path node count)
function calculateDepth(root, tree_obj) {
  function maxDepth(node, tree) {
    if (!tree[node]) {
      return 1;
    }

    const children = tree[node];
    if (Object.keys(children).length === 0) {
      return 1;
    }

    let max = 0;
    for (const child of Object.keys(children)) {
      max = Math.max(max, maxDepth(child, children));
    }

    return max + 1;
  }

  return maxDepth(root, tree_obj);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
