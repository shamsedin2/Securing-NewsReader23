# NewsReader App - Quick Reference Checklist

## ✅ Project Setup Checklist

- [ ] Clone or download the project
- [ ] Run `npm install`
- [ ] Get NY Times API key from https://developer.nytimes.com/
- [ ] Enable Top Stories API and Article Search API
- [ ] Create `.env` file from `.env.example`
- [ ] Add API key to `.env` file
- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173

## ✅ Features Implemented

### Authentication
- [ ] AuthContext.jsx created with login/logout functions
- [ ] Support for "regular" and "admin" roles
- [ ] User state persisted in localStorage
- [ ] isAuthenticated() helper function
- [ ] isAdmin() helper function

### Components
- [ ] Login.jsx - Login form with role selection
- [ ] Navigation.jsx - Shows username when logged in, logout button
- [ ] ProtectedRoute.jsx - Guards protected pages
- [ ] ArticleCard.jsx - Displays articles with save functionality

### Pages
- [ ] HomePage.jsx - Shows NY Times top stories
- [ ] SearchPage.jsx - Search NY Times articles
- [ ] SavedArticlesPage.jsx - User's saved articles (protected)
- [ ] AdminPage.jsx - View all users' articles (admin only, protected)

### Context & State Management
- [ ] ArticlesContext.jsx - Manages saved articles per user
- [ ] savedArticlesByUser structure: { username: [articles] }
- [ ] getUserSavedArticles() - Returns current user's articles
- [ ] getAllUserArticles() - Returns all users' articles
- [ ] saveArticle() - Saves article for current user
- [ ] removeArticle() - Removes article for current user
- [ ] isArticleSaved() - Checks if article is saved

### Routing
- [ ] / - HomePage (public)
- [ ] /search - SearchPage (public)
- [ ] /login - Login (public)
- [ ] /saved - SavedArticlesPage (protected - regular users)
- [ ] /admin - AdminPage (protected - admin only)

### Styling
- [ ] Matches screenshot design
- [ ] Responsive layout
- [ ] Professional login form
- [ ] Clean navigation
- [ ] Article cards with hover effects

## ✅ Testing Checklist

### Public Access
- [ ] Can view home page without login
- [ ] Can view search page without login
- [ ] Can search for articles without login
- [ ] Cannot save articles without login
- [ ] Redirected to /login when accessing /saved while logged out

### Regular User
- [ ] Can login with any username/password
- [ ] Can see username in navigation
- [ ] Can save articles
- [ ] Can view saved articles
- [ ] Can remove saved articles
- [ ] Cannot see admin link in navigation
- [ ] Cannot access /admin (redirected to /)

### Admin User
- [ ] Can login with "admin" role
- [ ] Can see "Admin" link in navigation
- [ ] Can access /admin page
- [ ] Can see all users' saved articles
- [ ] Each user's articles shown separately

### User-Specific Data
- [ ] User1 saves articles → only User1 sees them
- [ ] User2 saves articles → only User2 sees them
- [ ] Admin sees both User1 and User2's articles
- [ ] Logout and login preserves saved articles

### Data Persistence
- [ ] Saved articles persist after page refresh
- [ ] Login state persists after page refresh
- [ ] Logout clears current user, keeps saved articles

## ✅ Deployment Checklist

### Pre-Deployment
- [ ] All features tested locally
- [ ] No console errors
- [ ] API key working
- [ ] Code committed to GitHub

### GitHub
- [ ] Repository created on GitHub
- [ ] All files pushed to main branch
- [ ] .env not committed (in .gitignore)
- [ ] README.md is complete

### Vercel Setup
- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Environment variable added: VITE_NY_TIMES_API_KEY
- [ ] Project deployed successfully
- [ ] Deployment URL accessible

### Post-Deployment Testing
- [ ] Production site loads
- [ ] Top stories display
- [ ] Search works
- [ ] Login works
- [ ] Save articles works
- [ ] User-specific data works
- [ ] Admin dashboard works

## ✅ File Structure Checklist

```
newsreader-app/
├── src/
│   ├── components/
│   │   ├── ArticleCard.jsx ✓
│   │   ├── Login.jsx ✓
│   │   ├── Navigation.jsx ✓
│   │   └── ProtectedRoute.jsx ✓
│   ├── context/
│   │   ├── AuthContext.jsx ✓
│   │   └── ArticlesContext.jsx ✓
│   ├── pages/
│   │   ├── HomePage.jsx ✓
│   │   ├── SearchPage.jsx ✓
│   │   ├── SavedArticlesPage.jsx ✓
│   │   └── AdminPage.jsx ✓
│   ├── styles/
│   │   ├── Navigation.css ✓
│   │   ├── Login.css ✓
│   │   ├── ArticleCard.css ✓
│   │   ├── HomePage.css ✓
│   │   ├── SearchPage.css ✓
│   │   ├── SavedArticlesPage.css ✓
│   │   └── AdminPage.css ✓
│   ├── App.jsx ✓
│   ├── App.css ✓
│   └── main.jsx ✓
├── index.html ✓
├── package.json ✓
├── vite.config.js ✓
├── .env (create from .env.example) ✓
├── .env.example ✓
├── .gitignore ✓
├── README.md ✓
└── DEPLOYMENT_GUIDE.md ✓
```

## ✅ Assignment Requirements

### Step 3: Create Authentication Context ✓
- [x] AuthContext.jsx created in src/context/
- [x] login, logout, user state management
- [x] Support for "regular" and "admin" roles
- [x] AuthProvider wraps App in App.jsx

### Step 4: Build Login and Logout Components ✓
- [x] Login component integrated
- [x] /login route added to App.jsx
- [x] Navigation shows username when logged in
- [x] Navigation shows logout button when logged in
- [x] Navigation shows login link when logged out

### Step 5: Implement Protected Routes ✓
- [x] ProtectedRoute.jsx created
- [x] Redirects to /login if not authenticated
- [x] /saved route wrapped with ProtectedRoute

### Step 6: Make Saved Articles User-Specific ✓
- [x] ArticlesContext uses useAuth
- [x] savedArticles changed to savedArticlesByUser object
- [x] saveArticle works with current user
- [x] removeArticle works with current user
- [x] isArticleSaved checks current user
- [x] getUserSavedArticles() returns current user's articles
- [x] Navigation uses getUserSavedArticles()
- [x] SavedArticlesPage uses getUserSavedArticles()

### Step 7: Add Role-Based Access Control ✓
- [x] isAdmin() helper in AuthContext
- [x] getAllUserArticles() in ArticlesContext
- [x] AdminPage checks isAdmin
- [x] AdminPage redirects non-admins
- [x] Navigation shows Admin link for admins only
- [x] /admin route added with ProtectedRoute

### Step 8: Deploy to Vercel ✓
- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] VITE_NY_TIMES_API_KEY added to Vercel
- [ ] Application deployed
- [ ] Production tested

### Step 9: Test Application ✓
- [ ] Login/logout tested
- [ ] Save articles as regular user tested
- [ ] User-specific data tested
- [ ] Admin dashboard tested
- [ ] Changes pushed to GitHub

### Step 10: Submit Work ✓
- [ ] GitHub repository URL ready
- [ ] Authentication flow working
- [ ] Regular user can save/view articles
- [ ] Admin can view all saved articles

## 📝 Notes

**Demo Credentials (Any work for testing):**
- Username: (any)
- Password: (any)
- Role: Regular User or Admin

**Important:** Select the role during login to test different access levels.

**Data Storage:**
- Uses localStorage for persistence
- Data is per-browser
- Clear localStorage to reset all data

**API Limits:**
- NY Times API has rate limits
- Free tier: 1000 requests per day
- 10 requests per minute
