# SRM Full Stack Engineering Challenge

A REST API that processes hierarchical node relationships and detects cycles, trees, and various graph properties.

## Features

- **REST API** (`POST /bfhl`) that processes node hierarchy data
- **Cycle Detection** - Identifies cyclic dependencies in the graph
- **Tree Building** - Constructs multiple independent trees with depth calculation
- **Input Validation** - Validates node format and identifies invalid entries
- **Duplicate Detection** - Tracks duplicate edges
- **Interactive Frontend** - Beautiful UI to test the API

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: Vercel

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open `http://localhost:3001` in your browser

### API Usage

**Endpoint**: `POST /bfhl`

**Request Body**:
```json
{
  "data": ["A->B", "A->C", "B->D", "C->E"]
}
```

**Response**:
```json
{
  "user_id": "tejaprakash_24042001",
  "email_id": "tejaprakash@college.edu",
  "college_roll_number": "21CS1001",
  "hierarchies": [
    {
      "root": "A",
      "tree": { "A": { "B": { "D": {} }, "C": { "E": {} } } },
      "depth": 3
    }
  ],
  "invalid_entries": [],
  "duplicate_edges": [],
  "summary": {
    "total_trees": 1,
    "total_cycles": 0,
    "largest_tree_root": "A"
  }
}
```

## Validation Rules

### Node Format
- Must be `X->Y` where X and Y are single uppercase letters (A-Z)
- Self-loops (`A->A`) are invalid
- Invalid: `"hello"`, `"1->2"`, `"AB->C"`, `"A-B"`, `"A->"`, `" A->B "`

### Duplicate Edges
- First occurrence is used for tree construction
- Subsequent occurrences are tracked in `duplicate_edges`

### Cycles
- Detected automatically during tree building
- Cyclic groups have `has_cycle: true` and empty `tree: {}`
- Lexicographically smallest node used as root for pure cycles

### Depth Calculation
- Number of nodes on the longest root-to-leaf path
- Example: A->B->C has depth 3

## Deployment on Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically build and deploy
4. API will be available at `https://your-app.vercel.app/bfhl`

## Project Structure

```
.
├── server.js           # Express server with API logic
├── public/
│   └── index.html     # Frontend UI
├── package.json       # Dependencies
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## Performance

- Handles up to 50 nodes in under 3 seconds
- CORS enabled for cross-origin requests
- Optimized graph traversal algorithms

## Author

Built for SRM Full Stack Engineering Challenge

---

**Note**: Update `USER_ID`, `EMAIL_ID`, and `COLLEGE_ROLL_NUMBER` in `server.js` with your actual credentials.
