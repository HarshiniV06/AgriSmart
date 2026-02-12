# Quick Deployment Commands

## 🚀 Deploy Everything (Copy & Paste)

### Step 1: Commit and Push to GitHub
```bash
cd C:\AgriSmart
git add .
git commit -m "Ready for deployment with backend support"
git push origin main
```

### Step 2: Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com) - Sign up with GitHub
2. Click "Add New Project" → Import `AgriSmart`
3. **Settings:**
   - Root Directory: `frontend` ← **Important!**
   - Framework: Create React App
   - Environment Variable: 
     - Name: `REACT_APP_API_URL`
     - Value: `http://localhost:5000` (change later)
4. Click "Deploy"
5. Save your URL: `https://________.vercel.app`

### Step 3: Deploy Backend to Render
1. Go to [render.com](https://render.com) - Sign up with GitHub
2. Click "New +" → "Web Service" → Connect `AgriSmart`
3. **Settings:**
   - Name: `agrismart-backend`
   - Runtime: Python 3
   - Build Command: `pip install -r backend/requirements.txt`
   - Start Command: `cd backend && gunicorn app:app --bind 0.0.0.0:$PORT`
   - Environment Variables:
     - `PYTHON_VERSION`: `3.12.0`
     - `FLASK_ENV`: `production`
     - `JWT_SECRET_KEY`: (click Generate)
4. Click "Create Web Service"
5. Save your URL: `https://________.onrender.com`

### Step 4: Update Frontend to Use Backend
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit `REACT_APP_API_URL` → Change to your Render URL
3. Go to Deployments → Redeploy

### Step 5: Test Everything! 🎉
Visit your Vercel URL and test all features!

---

## 📝 URLs to Save for Resume

```
Live Frontend: https://________.vercel.app
Backend API: https://________.onrender.com
GitHub: https://github.com/HarshiniV06/AgriSmart
```

---

## ⚡ Quick Test Commands

### Test Backend Health
```bash
# Replace with your backend URL
curl https://your-backend.onrender.com/
```

Should return: `{"status": "healthy"}`

### Test Frontend Locally
```bash
cd C:\AgriSmart\frontend
npm start
```

### Test Backend Locally
```bash
cd C:\AgriSmart\backend
python app.py
```

---

## 🐛 Common Issues & Fixes

### Issue: "Failed to fetch" on frontend
**Fix**: Backend is sleeping (Render free tier). Wait 60 seconds and try again.

### Issue: Build failed on Render
**Fix**: Check that `gunicorn` is in `backend/requirements.txt`:
```bash
cd C:\AgriSmart\backend
echo gunicorn==21.2.0 >> requirements.txt
git add requirements.txt
git commit -m "Add gunicorn"
git push origin main
```

### Issue: Frontend can't connect to backend
**Fix**: Update Vercel environment variable with correct backend URL and redeploy.

### Issue: ML models not loading on Render
**Fix**: Render free tier has 512MB memory limit. ML models might be too large. Options:
1. Use Railway (has more memory)
2. Deploy only basic features (crop, fertilizer, yield)
3. Keep ML features local for demos

---

## 🎯 Before Sharing with Recruiters

1. ✅ Visit your site once to wake up backend
2. ✅ Test all features work
3. ✅ Check mobile responsiveness
4. ✅ Try language switcher
5. ✅ Ensure GitHub README has screenshots
6. ✅ Add project description to README

Your project is now live and ready for your resume! 🚀
