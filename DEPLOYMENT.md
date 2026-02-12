# 🚀 AgriSmart Deployment Guide

This guide will help you deploy AgriSmart to make it live for recruiters to view.

## 📋 Prerequisites
- GitHub account
- Vercel account (free)
- Render account (free)

---

## 🖥️ Part 1: Deploy Backend to Render

### Step 1: Sign Up for Render
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account

### Step 2: Create a New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `HarshiniV06/AgriSmart`
3. Configure the service:
   - **Name**: `agrismart-backend` (or your preferred name)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r backend/requirements-deploy.txt`
   - **Start Command**: `cd backend && gunicorn app:app --bind 0.0.0.0:$PORT --timeout 120`

### Step 3: Add Environment Variables
In the Render dashboard, add these environment variables:
- `PYTHON_VERSION`: `3.12.0`
- `FLASK_ENV`: `production`
- `JWT_SECRET_KEY`: Click "Generate" for a random secret

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait for the build to complete (5-10 minutes first time)
3. Copy your backend URL (e.g., `https://agrismart-backend.onrender.com`)

### ⚠️ Important Notes for Render:
- **Free tier sleeps after 15 minutes of inactivity**
- First request after sleep takes 30-60 seconds (cold start)
- Models may need to be re-uploaded or trained on the server
- For now, model files won't work on free tier due to storage limits
- Consider using Railway or PythonAnywhere for better model support

---

## 🌐 Part 2: Deploy Frontend to Vercel

### Step 1: Update Frontend Environment Variable
1. Open `frontend/.env.production`
2. Replace the URL with your Render backend URL:
   ```
   REACT_APP_API_URL=https://your-actual-backend-url.onrender.com
   ```
3. Commit and push this change to GitHub

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "Add New" → "Project"
4. Import your `HarshiniV06/AgriSmart` repository
5. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Add Environment Variable:
   - Key: `REACT_APP_API_URL`
   - Value: `https://your-backend-url.onrender.com`
7. Click "Deploy"

### Step 3: Get Your Live URL
- Vercel will provide a URL like: `https://agrismart.vercel.app`
- You can also add a custom domain if you have one

---

## 🎯 Part 3: Update Your Resume

Add these links to your resume:

**Live Demo**: https://your-app.vercel.app  
**GitHub**: https://github.com/HarshiniV06/AgriSmart  
**Backend API**: https://your-backend.onrender.com

---

## 🧪 Testing Your Deployment

1. Visit your Vercel frontend URL
2. Try creating an account
3. Test the features:
   - ✅ Crop Recommendation
   - ✅ Fertilizer Recommendation
   - ✅ Yield Prediction
   - ⚠️ Disease Detection (may not work due to model size limits on free tier)
   - ⚠️ Pest Detection (may not work due to model size limits on free tier)

---

## 🔧 Troubleshooting

### Backend Issues:
- **Build Failed**: Check the Render logs for errors
- **Models Not Loading**: Free tier has limited storage; consider removing model files temporarily
- **Slow Response**: Free tier sleeps; first request takes time

### Frontend Issues:
- **Can't Connect to Backend**: Verify CORS settings in `backend/app.py`
- **Build Failed**: Check Node.js version compatibility

### Common Fixes:
1. **Database Issues**: On Render, use PostgreSQL instead of SQLite
2. **CORS Errors**: Make sure your Vercel URL is in the CORS origins list
3. **Model Files Too Large**: Use Git LFS or deploy without models

---

## 💡 Alternative Deployment Options

### Backend Alternatives:
- **Railway** (free tier, better for ML models): railway.app
- **PythonAnywhere** (free tier, good for Flask): pythonanywhere.com
- **Heroku** (requires credit card but free): heroku.com

### Frontend Alternatives:
- **Netlify**: netlify.com
- **GitHub Pages**: For static sites only
- **Firebase Hosting**: firebase.google.com

---

## 📌 For Recruiters
Include this in your README:
```
🌐 **Live Demo**: [AgriSmart Live](https://your-app.vercel.app)
📚 **API Documentation**: [Backend API](https://your-backend.onrender.com)
💻 **Source Code**: [GitHub Repository](https://github.com/HarshiniV06/AgriSmart)
```

---

## 🎓 Resume Tips

Highlight these technical achievements:
- ✅ Full-stack deployment (React + Flask)
- ✅ CI/CD with Vercel/Render
- ✅ RESTful API design
- ✅ ML model integration
- ✅ JWT authentication
- ✅ Responsive UI with Tailwind CSS
- ✅ Cloud deployment experience

Good luck with your job search! 🚀
