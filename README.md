# NewsReader App

A React-based news reader application that uses the NY Times API to display top stories and search articles. Features include user authentication, role-based access control, and personalized article saving.

## Features

- 🔐 **Authentication System**: Login/logout with regular and admin roles
- 📰 **Top Stories**: View latest news from NY Times
- 🔍 **Article Search**: Search NY Times archive
- 💾 **Save Articles**: Authenticated users can save favorite articles
- 👥 **User-Specific Data**: Each user has their own saved articles
- 🛡️ **Protected Routes**: Secure pages requiring authentication
- 👨‍💼 **Admin Dashboard**: Admins can view all users' saved articles

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- NY Times API key

## Setup Instructions

### 1. Get NY Times API Key

1. Navigate to [NY Times Developer Portal](https://developer.nytimes.com/)
2. Create a free account and verify your email
3. Log in to the developer portal
4. Click on your email in the top right corner → Apps
5. Click "New App"
6. Give your app a name (e.g., "NewsReader App")
7. **Important**: Enable these two APIs:
   - Top Stories API
   - Article Search API
8. Click "Save" to generate your API key

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```
VITE_NY_TIMES_API_KEY=your_actual_api_key_here
```

### 4. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
newsreader-app/
├── src/
│   ├── components/
│   │   ├── ArticleCard.jsx       # Article display component
│   │   ├── Login.jsx              # Login form
│   │   ├── Navigation.jsx         # Navigation bar
│   │   └── ProtectedRoute.jsx     # Route guard component
│   ├── context/
│   │   ├── AuthContext.jsx        # Authentication state management
│   │   └── ArticlesContext.jsx    # Saved articles management
│   ├── pages/
│   │   ├── HomePage.jsx           # Top stories page
│   │   ├── SearchPage.jsx         # Article search page
│   │   ├── SavedArticlesPage.jsx  # User's saved articles
│   │   └── AdminPage.jsx          # Admin dashboard
│   ├── styles/
│   │   ├── Navigation.css
│   │   ├── Login.css
│   │   ├── ArticleCard.css
│   │   ├── HomePage.css
│   │   ├── SearchPage.css
│   │   ├── SavedArticlesPage.css
│   │   └── AdminPage.css
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   └── main.jsx                   # Entry point
├── index.html
├── package.json
├── vite.config.js
├── .env.example
└── README.md
```

## User Roles

### Regular User
- Can view top stories
- Can search articles
- Can save and remove articles
- Can view their own saved articles

### Admin User
- All regular user permissions
- Can view all users' saved articles in admin dashboard

## Testing the Application

### Demo Login (For Testing)
The app accepts any username/password combination for testing:

1. Go to `/login`
2. Enter any username (e.g., "john")
3. Enter any password (e.g., "password")
4. Select account type:
   - **Regular User**: Test user-specific features
   - **Admin**: Test admin dashboard

### Testing Workflow

1. **Login as Regular User**:
   - Login with username "user1" as Regular User
   - Save some articles from Home or Search
   - View your saved articles

2. **Login as Another Regular User**:
   - Logout and login as "user2" as Regular User
   - Notice saved articles are different
   - Save different articles

3. **Login as Admin**:
   - Logout and login as "admin" as Admin
   - Click "Admin" link in navigation
   - See all users' saved articles

## Deployment to Vercel

### 1. Prepare for Deployment

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "added admin roles and pages"
git push
```

### 2. Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - Add `VITE_NY_TIMES_API_KEY` with your API key value
6. Click "Deploy"

### 3. Verify Deployment

Once deployed, test all features:
- Login/logout
- Save articles as regular user
- View admin dashboard as admin

## Key Implementation Details

### Authentication (AuthContext)
- Uses React Context for global state
- Stores user data in localStorage for persistence
- Supports two roles: "regular" and "admin"
- Provides `isAuthenticated()` and `isAdmin()` helper functions

### Protected Routes
- `ProtectedRoute` component checks authentication
- Redirects to `/login` if not authenticated
- Wraps protected pages in App.jsx

### User-Specific Data (ArticlesContext)
- Saved articles organized by username: `{ username: [articles] }`
- `getUserSavedArticles()`: Returns current user's articles
- `getAllUserArticles()`: Returns all users' articles (admin only)
- Data persisted in localStorage

### Role-Based Access
- Admin page checks `isAdmin()` before rendering
- Redirects non-admins to home page
- Admin link only visible to admin users in navigation

## API Endpoints Used

- **Top Stories**: `https://api.nytimes.com/svc/topstories/v2/home.json`
- **Article Search**: `https://api.nytimes.com/svc/search/v2/articlesearch.json`

## Technologies Used

- React 18
- React Router 6
- Vite
- NY Times API
- Local Storage for data persistence

## Troubleshooting

### API Key Issues
- Make sure your .env file is in the root directory
- Variable must be named `VITE_NY_TIMES_API_KEY`
- Restart dev server after adding .env file

### Articles Not Loading
- Check browser console for API errors
- Verify API key is active in NY Times developer portal
- Ensure both Top Stories and Article Search APIs are enabled

### Saved Articles Not Persisting
- Check browser localStorage is not disabled
- Try in incognito mode to test fresh state
- Clear localStorage if data is corrupted: `localStorage.clear()`

## License

MIT

## Support

For issues or questions, please create an issue in the GitHub repository.
