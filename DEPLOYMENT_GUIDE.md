# Complete Setup and Deployment Guide

## Part 1: Getting Started Locally

### Step 1: Get Your NY Times API Key

1. Open your browser and go to: https://developer.nytimes.com/
2. Click "Get Started" or "Sign Up"
3. Fill in your information to create an account
4. Check your email and click the verification link (ignore any errors after clicking)
5. Go back to https://developer.nytimes.com/ and log in
6. Click on your email address in the top right corner
7. Click "Apps"
8. Click the "New App" button
9. Enter a name for your app (example: "NewsReader App")
10. **IMPORTANT**: Scroll down and enable:
    - ✅ Top Stories API
    - ✅ Article Search API
11. Click "Save"
12. Copy the API key that appears

### Step 2: Set Up Your Project

Open your terminal/command prompt and run:

```bash
# Navigate to your project folder
cd newsreader-app

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Step 3: Add Your API Key

1. Open the `.env` file in your text editor
2. Replace `your_api_key_here` with your actual API key:
   ```
   VITE_NY_TIMES_API_KEY=abc123yourrealapikey456
   ```
3. Save the file

### Step 4: Start the Development Server

```bash
npm run dev
```

Open your browser to: http://localhost:5173

## Part 2: Testing Your Application

### Test 1: View Top Stories
1. You should see news articles on the home page
2. If you see an error about API key, double-check Step 3

### Test 2: Search Articles
1. Click "Search" in the navigation
2. Type a search term (e.g., "technology")
3. Click "Search" button
4. Verify search results appear

### Test 3: Authentication (Regular User)
1. Click "Login" in the top right
2. Enter username: `testuser1`
3. Enter any password: `password`
4. Select "Regular User" from dropdown
5. Click "Login"
6. Verify you see your username in the navigation
7. Click a "Save" button on an article
8. Click "Saved Articles" - verify the article appears

### Test 4: User-Specific Saved Articles
1. Click "Logout"
2. Click "Login" again
3. Enter username: `testuser2`
4. Enter any password
5. Select "Regular User"
6. Click "Login"
7. Click "Saved Articles"
8. Verify it's empty (different from testuser1)
9. Save some different articles
10. Logout and login as `testuser1` again
11. Verify you see testuser1's saved articles, not testuser2's

### Test 5: Admin Access
1. Logout if logged in
2. Click "Login"
3. Enter username: `admin`
4. Enter any password
5. Select "Admin" from dropdown
6. Click "Login"
7. Verify "Admin" link appears in navigation
8. Click "Admin"
9. Verify you can see saved articles from all users (testuser1 and testuser2)

### Test 6: Protected Routes
1. Logout
2. Try to visit: http://localhost:5173/saved
3. Verify you're redirected to the login page
4. Login as any user
5. Now you can access /saved

## Part 3: Prepare for Deployment

### Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NewsReader app with authentication and admin roles"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" in the top right
3. Click "New repository"
4. Name it: `newsreader-app`
5. Keep it Public
6. Don't initialize with README (you already have one)
7. Click "Create repository"

### Step 3: Push to GitHub

Copy and run the commands GitHub shows you:

```bash
git remote add origin https://github.com/YOUR_USERNAME/newsreader-app.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Part 4: Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 2: Import Project

1. On Vercel dashboard, click "Add New..."
2. Click "Project"
3. Find your `newsreader-app` repository
4. Click "Import"

### Step 3: Configure Environment Variables

Before clicking "Deploy":

1. Expand "Environment Variables"
2. Add a new variable:
   - Name: `VITE_NY_TIMES_API_KEY`
   - Value: [Your API key from Part 1]
3. Click "Add"

### Step 4: Deploy

1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Click "Visit" to see your live site!

### Step 5: Test Production Deployment

1. Test login functionality
2. Save articles as a regular user
3. Login as admin and verify admin dashboard works
4. Share the URL with others!

## Part 5: Make Updates

### To update your deployed site:

```bash
# Make your changes to the code

# Save and commit
git add .
git commit -m "Describe your changes"

# Push to GitHub
git push

# Vercel automatically redeploys!
```

## Common Issues and Solutions

### Issue: "API key not found" error

**Solution:**
- Make sure `.env` file exists in root directory
- Variable must be named exactly: `VITE_NY_TIMES_API_KEY`
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### Issue: Articles not loading

**Solution:**
- Check your API key is correct
- Log into NY Times developer portal
- Verify Top Stories API and Article Search API are enabled
- Check browser console (F12) for error messages

### Issue: Saved articles disappear after refresh

**Solution:**
- This is normal in development if localStorage is cleared
- Check browser settings allow localStorage
- Try a different browser

### Issue: Can't access /saved or /admin

**Solution:**
- Make sure you're logged in
- These are protected routes
- Check the navigation shows your username

### Issue: Vercel deployment fails

**Solution:**
- Make sure all files are committed and pushed to GitHub
- Check environment variable is added correctly in Vercel
- Check build logs in Vercel for specific errors

### Issue: Admin dashboard shows no users

**Solution:**
- Login as regular user first and save some articles
- Then login as admin to see those articles
- Data is stored per-deployment (won't transfer from localhost)

## Getting Help

If you encounter issues not covered here:

1. Check the browser console (F12) for errors
2. Check the terminal where `npm run dev` is running for errors
3. Review the README.md for additional information
4. Create an issue on GitHub with:
   - What you were trying to do
   - What happened instead
   - Any error messages
   - Screenshots if helpful

## Security Notes

- Never commit your `.env` file to GitHub (it's in .gitignore)
- Never share your API key publicly
- In production, consider adding real authentication (this is a demo)
- The admin role should validate credentials in a real app

## Next Steps

After successful deployment, you can:

1. Customize the styling in the CSS files
2. Add more features (article categories, user profiles, etc.)
3. Implement real authentication with a backend
4. Add error boundaries for better error handling
5. Add loading skeletons for better UX
6. Implement pagination for search results
7. Add article filtering and sorting options

Congratulations on building and deploying your NewsReader app! 🎉
