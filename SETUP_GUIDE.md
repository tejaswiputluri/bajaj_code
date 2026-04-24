# Setup & Testing Guide

## Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Git (for version control)

## Local Setup

### Step 1: Clone or Download the Repository

```bash
git clone https://github.com/YOUR_USERNAME/srm-fullstack-challenge.git
cd srm-fullstack-challenge
```

Or download and extract the ZIP file.

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- `express`: Web framework for Node.js
- `cors`: Cross-origin resource sharing

### Step 3: Update Your Credentials

Edit `server.js` and update these constants at the top:

```javascript
const USER_ID = "tejaprakash_24042001";      // Format: fullname_ddmmyyyy
const EMAIL_ID = "tejaprakash@college.edu"; // Your college email
const COLLEGE_ROLL_NUMBER = "21CS1001";     // Your roll number
```

### Step 4: Start the Server

```bash
npm start
```

You should see:
```
Server running on port 3001
```

### Step 5: Open the Frontend

Open your browser and go to:
```
http://localhost:3001
```

You should see the beautiful Hierarchy Builder interface.

## Testing the API

### Option A: Using the Frontend

1. Click "Load Example" to populate sample data
2. Click "Submit" button
3. View the results in the right panel

### Option B: Using the Test Script

In a new terminal (while server is running):

```bash
node test.js
```

Expected output:
```json
{
  "user_id": "tejaprakash_24042001",
  "email_id": "tejaprakash@college.edu",
  ...
}
```

### Option C: Using curl

```bash
curl -X POST http://localhost:3001/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A->B", "B->C", "C->D"]}'
```

### Option D: Using Postman

1. Open Postman
2. Create new POST request
3. URL: `http://localhost:3001/bfhl`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
   ```json
   {
     "data": ["A->B", "A->C", "B->D"]
   }
   ```
6. Click Send

## Testing Different Scenarios

### Scenario 1: Simple Linear Tree

Input:
```json
{"data": ["A->B", "B->C", "C->D"]}
```

Expected: Single tree with root A, depth 4

### Scenario 2: Multiple Trees

Input:
```json
{"data": ["A->B", "B->C", "X->Y", "Y->Z"]}
```

Expected: Two trees (A and X)

### Scenario 3: Cycle Detection

Input:
```json
{"data": ["A->B", "B->C", "C->A"]}
```

Expected: Cycle detected (has_cycle: true, empty tree)

### Scenario 4: Invalid Entries

Input:
```json
{"data": ["A->B", "hello", "1->2", "A->A"]}
```

Expected: Invalid entries flagged

### Scenario 5: Duplicate Edges

Input:
```json
{"data": ["A->B", "A->B", "B->C"]}
```

Expected: Duplicate "A->B" tracked

### Scenario 6: Complex Mixed

Input:
```json
{
  "data": [
    "A->B", "A->C", "B->D", "C->E", "E->F",
    "X->Y", "Y->Z", "Z->X",
    "P->Q", "Q->R",
    "G->H", "G->H", "G->I",
    "hello", "1->2", "A->"
  ]
}
```

Expected: Matches exact output from challenge specification

## Troubleshooting

### "Port 3001 is already in use"

Kill the process using port 3001:

**Windows:**
```bash
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -i :3001
kill -9 <PID>
```

Or use a different port:
```bash
PORT=3002 npm start
```

### "Cannot find module 'express'"

Run:
```bash
npm install
```

### "CORS error in frontend"

Make sure CORS is enabled in server.js:
```javascript
const cors = require('cors');
app.use(cors());
```

### Frontend returns 404

Ensure Express is serving static files:
```javascript
app.use(express.static('public'));
```

Check that `public/index.html` exists.

### API returns "data must be an array"

Make sure your request body is:
```json
{"data": [...]}
```

Not:
```json
[...]
```

## Performance Testing

### Test with Large Input

Create a test file with 50 nodes:

```bash
node -e "
const http = require('http');
const data = [];
for(let i=0; i<25; i++) {
  data.push(String.fromCharCode(65+i) + '->' + String.fromCharCode(65+i+1));
}
const postData = JSON.stringify({data});
const req = http.request({
  hostname: 'localhost',
  port: 3001,
  path: '/bfhl',
  method: 'POST',
  headers: {'Content-Type': 'application/json', 'Content-Length': postData.length}
}, (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => console.log(d));
});
req.write(postData);
req.end();
"
```

Should complete in < 1 second.

## Development Workflow

### Make Changes

Edit `server.js` or `public/index.html`

### Restart Server

1. Press `Ctrl+C` in terminal
2. Run `npm start` again
3. Refresh browser (Ctrl+R or Cmd+R)

### Testing After Changes

```bash
node test.js
```

### Commit Changes

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

## Before Deployment

Checklist:

- [ ] All tests pass (`node test.js`)
- [ ] Frontend loads without errors
- [ ] API responds in < 3 seconds
- [ ] Invalid entries are properly flagged
- [ ] Cycles are detected correctly
- [ ] Duplicate edges are tracked
- [ ] Credentials are updated
- [ ] .gitignore excludes node_modules
- [ ] README.md is up to date

## Next Steps

1. **Local testing**: Verify everything works locally
2. **Push to GitHub**: Create repo and push code
3. **Deploy**: Follow DEPLOYMENT.md for hosting
4. **Submit**: Provide URLs to evaluator

## Support

For issues:

1. Check this guide first
2. Review README.md
3. Look at test.js for API usage examples
4. Check browser console for frontend errors (F12)
5. Check server logs for API errors

---

Happy coding! 🚀
