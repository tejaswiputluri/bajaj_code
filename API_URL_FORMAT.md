# 📋 API URL Format for Submission

## ✅ Correct Format

### Backend API Base URL (for submission form)
```
https://YOUR-APP-NAME.herokuapp.com
```

**Example:**
```
https://hierarchy-builder-tejaswi.herokuapp.com
```

---

## 🔗 Complete API Endpoint

When making API requests, append `/bfhl`:
```
https://YOUR-APP-NAME.herokuapp.com/bfhl
```

**Example:**
```
https://hierarchy-builder-tejaswi.herokuapp.com/bfhl
```

---

## 📝 Submission Form Fields

| Field | Value |
|-------|-------|
| **Backend API Base URL** | `https://YOUR-APP-NAME.herokuapp.com` |
| **Frontend URL** | `https://YOUR-APP-NAME.herokuapp.com` |
| **GitHub Repository** | `https://github.com/tejaswiputluri/bajaj_code` |
| **User ID** | `tejaswiputluri_06072006` |
| **Email** | `tejaswi_putluri@srmap.edu.in` |
| **College Roll Number** | `AP23110010532` |

---

## ❌ Wrong Format (Do NOT use)

```
https://hierarchy-builder-tejaswi.herokuapp.com/bfhl  ❌
```

The `/bfhl` should NOT be in the Base URL field!

---

## 🧪 Testing Your API

### Using cURL
```bash
curl -X POST https://YOUR-APP-NAME.herokuapp.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data":["A->B","A->C","B->D"]}'
```

### Using Postman
- **Method**: POST
- **URL**: https://YOUR-APP-NAME.herokuapp.com/bfhl
- **Body** (JSON):
```json
{
  "data": ["A->B", "A->C", "B->D"]
}
```

---

## 📌 Quick Deploy Steps

1. Install Heroku CLI: `choco install heroku-cli`
2. Login: `heroku login`
3. Create app: `heroku create hierarchy-builder-tejaswi`
4. Deploy: `git push heroku main`
5. Get URL: `heroku open` or check dashboard
6. Copy Base URL (without /bfhl) to submission form

---

## ✨ Final URLs for SRM Submission

**After deploying on Heroku, use these exact URLs:**

```
🔗 Backend API Base URL:
   https://hierarchy-builder-tejaswi.herokuapp.com

🔗 Frontend URL:
   https://hierarchy-builder-tejaswi.herokuapp.com

🔗 GitHub Repository:
   https://github.com/tejaswiputluri/bajaj_code
```

---

**Remember: Base URL only — do NOT add /bfhl at the end for the submission form! ✅**
