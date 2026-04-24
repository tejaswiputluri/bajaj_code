const http = require('http');

// Comprehensive test suite for the API
const tests = [
  {
    name: "Example from Challenge Specification",
    data: [
      "A->B", "A->C", "B->D", "C->E", "E->F",
      "X->Y", "Y->Z", "Z->X",
      "P->Q", "Q->R",
      "G->H", "G->H", "G->I",
      "hello", "1->2", "A->"
    ],
    expectedTrees: 3,
    expectedCycles: 1,
    expectedInvalid: 3,
    expectedDuplicates: 1
  },
  {
    name: "Simple Linear Tree",
    data: ["A->B", "B->C", "C->D"],
    expectedTrees: 1,
    expectedCycles: 0,
    expectedInvalid: 0,
    expectedDuplicates: 0
  },
  {
    name: "Multiple Independent Trees",
    data: ["A->B", "B->C", "X->Y", "Y->Z"],
    expectedTrees: 2,
    expectedCycles: 0,
    expectedInvalid: 0,
    expectedDuplicates: 0
  },
  {
    name: "Cycle Detection",
    data: ["A->B", "B->C", "C->A"],
    expectedTrees: 0,
    expectedCycles: 1,
    expectedInvalid: 0,
    expectedDuplicates: 0
  },
  {
    name: "Duplicate Edges",
    data: ["A->B", "A->B", "A->B"],
    expectedTrees: 1,
    expectedCycles: 0,
    expectedInvalid: 0,
    expectedDuplicates: 1
  },
  {
    name: "Invalid Entries",
    data: ["hello", "123", "A-B", "a->b", "A->", "->B", "A->AA"],
    expectedTrees: 0,
    expectedCycles: 0,
    expectedInvalid: 7,
    expectedDuplicates: 0
  },
  {
    name: "Self-loops",
    data: ["A->A", "B->B", "A->B"],
    expectedTrees: 1,
    expectedCycles: 0,
    expectedInvalid: 2,
    expectedDuplicates: 0
  },
  {
    name: "Complex Graph with All Features",
    data: [
      "A->B", "A->B",      // Duplicate
      "B->C",              // Tree continues
      "X->Y", "Y->Z",      // Second tree
      "P->Q", "Q->P",      // Cycle
      "invalid",           // Invalid
      "1->2",              // Invalid (numbers)
      "M->N", "N->M"       // Another cycle
    ],
    expectedTrees: 2,
    expectedCycles: 2,
    expectedInvalid: 2,
    expectedDuplicates: 1
  }
];

let passedTests = 0;
let failedTests = 0;

function testAPI(testCase, callback) {
  const postData = JSON.stringify({ data: testCase.data });

  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/bfhl',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        const treeCount = response.hierarchies.filter(h => !h.has_cycle).length;
        const cycleCount = response.hierarchies.filter(h => h.has_cycle).length;
        const invalidCount = response.invalid_entries.length;
        const duplicateCount = response.duplicate_edges.length;

        const passed = 
          treeCount === testCase.expectedTrees &&
          cycleCount === testCase.expectedCycles &&
          invalidCount === testCase.expectedInvalid &&
          duplicateCount === testCase.expectedDuplicates;

        console.log(`\n${passed ? '✅ PASS' : '❌ FAIL'}: ${testCase.name}`);
        console.log(`  Trees: ${treeCount} (expected ${testCase.expectedTrees})`);
        console.log(`  Cycles: ${cycleCount} (expected ${testCase.expectedCycles})`);
        console.log(`  Invalid: ${invalidCount} (expected ${testCase.expectedInvalid})`);
        console.log(`  Duplicates: ${duplicateCount} (expected ${testCase.expectedDuplicates})`);

        if (passed) {
          passedTests++;
        } else {
          failedTests++;
        }

        callback();
      } catch (error) {
        console.log(`❌ FAIL: ${testCase.name} - Parse error: ${error.message}`);
        failedTests++;
        callback();
      }
    });
  });

  req.on('error', (e) => {
    console.log(`❌ ERROR: ${testCase.name} - ${e.message}`);
    failedTests++;
    callback();
  });

  req.write(postData);
  req.end();
}

// Run tests sequentially
function runTests(index) {
  if (index >= tests.length) {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Tests Complete: ${passedTests} passed, ${failedTests} failed`);
    console.log(`Success Rate: ${((passedTests / tests.length) * 100).toFixed(1)}%`);
    console.log(`${'='.repeat(50)}\n`);
    return;
  }

  testAPI(tests[index], () => {
    setTimeout(() => runTests(index + 1), 100);
  });
}

console.log('🧪 Running Comprehensive API Test Suite...\n');
runTests(0);
