# SunCart - Summer Essentials eCommerce Platform

## Project Overview

**SunCart** is a modern summer-themed eCommerce platform built with Next.js, Tailwind CSS, and BetterAuth. It provides users with a seamless shopping experience for summer essentials including sunglasses, beach accessories, skincare products, and more.

**Category**: A8-Jackfruit Assignment
**Live URL**: (Coming soon - Ready for deployment)

## Key Features

✨ **Authentication System**
- User registration with email, password, name, and profile photo
- User login with email and password
- Google OAuth social authentication
- Protected routes for authenticated users
- User profile management

🛍️ **Product Catalog**
- Display of 8+ summer products with detailed information
- Category filtering (Accessories, Clothing, Skincare)
- Product cards showing name, brand, rating, price, and stock status
- Detailed product pages (protected - requires login)
- High-quality product images and descriptions

🏠 **Home Page**
- Eye-catching hero banner with summer sale messaging
- Popular Products section showcasing 3 featured products
- Summer Care Tips section with helpful information
- Top Brands section highlighting partner brands
- Responsive design for all devices

👤 **User Profile Features**
- View user profile with avatar, name, and email
- Update profile information (name and photo URL)
- Profile data persistence
- Member information display

🔒 **Security & Design**
- Secure authentication with BetterAuth
- Environment variables for sensitive configuration
- Responsive UI using Tailwind CSS and DaisyUI
- Unique summer-themed orange color scheme
- Professional layout with persistent navbar and footer

## Tech Stack

- **Framework**: Next.js 16.2.5
- **Styling**: Tailwind CSS 4 + DaisyUI
- **Authentication**: BetterAuth
- **Database**: In-memory (SQLite for development)
- **Language**: JavaScript/JSX
- **Deployment Ready**: Yes (Can be deployed to Vercel, Render, or similar platforms)

## NPM Packages Used

```json
{
  "dependencies": {
    "next": "^16.2.5",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "better-auth": "^1.x.x"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "^16.2.5"
  }
}
```

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Navigate to the project directory**
```bash
cd summersale-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (optional for Google OAuth)
```bash
# .env.local
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
```

5. **Access the application**
```
http://localhost:3000
```

## Usage Guide

### User Authentication Flow

1. **Register**: Click "Register" button → Fill in name, email, photo URL, and password → Create account
2. **Login**: Click "Login" button → Enter email and password → Access protected features
3. **Google OAuth**: Click "Continue with Google" → Authenticate via Google account
4. **View Profile**: After login, visit `/profile` to see your profile information
5. **Update Profile**: Click "Update Information" to modify name and photo URL
6. **Logout**: Click "Logout" button in navbar to exit

### Browsing Products

1. **View All Products**: Click "Products" in navbar or "Shop Now" on home page
2. **Filter by Category**: Use category buttons to filter (All, Accessories, Clothing, Skincare)
3. **View Details**: Click "View Details" on any product (requires login)
4. **Product Information**: See full details including description, rating, price, and stock status

## Project Structure

```
summersale-ecommerce/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── layout.jsx
│   │   │   ├── login/page.jsx
│   │   │   └── register/page.jsx
│   │   ├── api/
│   │   │   └── auth/[...all]/route.js
│   │   ├── products/
│   │   │   ├── page.jsx
│   │   │   └── [id]/page.jsx
│   │   ├── profile/
│   │   │   ├── page.jsx
│   │   │   └── update/page.jsx
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   └── shared/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── lib/
│   │   ├── auth.js
│   │   └── auth-client.js
│   └── data/
│       └── products.json
├── public/
├── .env.local
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
└── README.md
```

## Features Breakdown

### 1. Homepage
- Hero banner with summer sale messaging
- 3 popular products showcase
- Summer care tips section
- Top brands display
- Fully responsive

### 2. Authentication Pages
- **Login Page**: Email, password, Google OAuth option
- **Register Page**: Name, email, photo URL, password, Google OAuth option
- Form validation and error handling

### 3. Products Page
- Display all 8 summer products
- Category filtering system
- Product grid layout (responsive)
- Stock status indicators
- Star ratings

### 4. Product Details Page (Protected)
- Full product information with images
- Rating display with stars
- Stock availability
- Add to cart button (placeholder)
- Requires login to access

### 5. Profile Pages (Protected)
- View profile with avatar
- Update profile functionality
- Form validation

## Responsive Design

✅ Mobile devices (320px+)
✅ Tablets (768px+)
✅ Desktop (1024px+)
✅ Large screens (1280px+)

## Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deployment Platforms
- Vercel
- Render
- Netlify
- AWS Amplify
- Azure App Service

## Troubleshooting

### Issue: npm execution policy error
**Solution**: 
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

### Issue: Login not working
**Solution**: Clear cookies, check browser console, ensure BetterAuth is configured.

## Version

**Version**: 1.0.0
**Status**: Ready for submission and deployment

---

For more information about Next.js, visit [Next.js Documentation](https://nextjs.org/docs)
