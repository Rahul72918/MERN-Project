# Forever — Full Stack E-Commerce Application

A complete full-stack e-commerce clothing store built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It includes a customer-facing storefront, a separate admin panel, and a RESTful backend API with support for multiple payment gateways.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

---

## Features

### Customer Storefront
- **User Authentication** — Register and login with email/password (JWT-based auth, bcrypt password hashing)
- **Product Browsing** — Browse products by category (Men, Women, Kids) and subcategory (Topwear, Bottomwear, Winterwear)
- **Product Search** — Real-time search bar to filter products
- **Product Details** — View product images, description, price, available sizes, and related products
- **Shopping Cart** — Add/remove items with size selection, persistent cart (synced with database for logged-in users)
- **Order Placement** — Delivery address form with order summary
- **Multiple Payment Methods**:
  - Cash on Delivery (COD)
  - Stripe (online payment)
  - Razorpay (online payment)
- **Order Tracking** — View order history and current order status
- **Currency Toggle** — Switch between INR (₹) and USD ($) display
- **Bestsellers & Latest Collection** — Highlighted product sections on the homepage
- **Responsive Design** — Fully responsive UI built with Tailwind CSS
- **Newsletter Subscription** — Email subscription box
- **About & Contact Pages** — Static informational pages

### Admin Panel
- **Secure Admin Login** — Separate admin authentication with JWT
- **Product Management** — Add new products with up to 4 images (uploaded to Cloudinary), set categories, sizes, and bestseller status
- **Product Listing** — View and remove products
- **Order Management** — View all orders and update order status (Order Placed → Packing → Shipped → Out for Delivery → Delivered)

---

## Tech Stack

### Frontend (Customer + Admin)
- **React 18** with functional components and hooks
- **React Router DOM** — Client-side routing
- **Tailwind CSS** — Utility-first styling
- **Axios** — HTTP client for API calls
- **React Toastify** — Toast notifications
- **Vite** — Build tool and dev server

### Backend
- **Node.js** + **Express.js** — REST API server
- **MongoDB** + **Mongoose** — Database and ODM
- **JWT (jsonwebtoken)** — Authentication tokens
- **bcrypt** — Password hashing
- **Cloudinary** — Cloud image storage
- **Multer** — File upload handling
- **Stripe** — Payment processing
- **Razorpay** — Payment processing
- **Validator** — Input validation
- **CORS** — Cross-origin resource sharing
- **dotenv** — Environment variable management

---

## Project Structure

```
forever-full-stack/
├── frontend/          # Customer-facing React app
│   └── src/
│       ├── assets/        # Images and static assets
│       ├── components/    # Navbar, Footer, SearchBar, Hero, ProductItem, etc.
│       ├── context/       # ShopContext (global state management)
│       └── pages/         # Home, Collection, Product, Cart, PlaceOrder, Orders, Login, About, Contact, Verify
│
├── admin/             # Admin panel React app
│   └── src/
│       ├── components/    # Login, Navbar, Sidebar
│       └── pages/         # Add, List, Orders
│
├── backend/           # Express.js API server
│   ├── config/            # MongoDB and Cloudinary configuration
│   ├── controllers/       # userController, productController, cartController, orderController
│   ├── middleware/         # auth (user JWT), adminAuth (admin JWT), multer (file uploads)
│   ├── models/            # User, Product, Order (Mongoose schemas)
│   ├── routes/            # userRoute, productRoute, cartRoute, orderRoute
│   └── server.js          # App entry point
│
└── README.md
```

---

## Getting Started

### Prerequisites
- **Node.js** (v18 or above recommended)
- **MongoDB** (Atlas cloud or local instance)
- **Cloudinary** account (for image uploads)
- **Stripe** account (for Stripe payments)
- **Razorpay** account (for Razorpay payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rahul72918/MERN-Project.git
   cd MERN-Project
   ```

2. **Install dependencies for all three apps**
   ```bash
   cd backend && npm install && cd ..
   cd frontend && npm install && cd ..
   cd admin && npm install && cd ..
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables) below)

4. **Run the backend**
   ```bash
   cd backend
   npm run server
   ```
   The API will start on `http://localhost:4000`.

5. **Run the frontend** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```

6. **Run the admin panel** (in a new terminal)
   ```bash
   cd admin
   npm run dev
   ```

---

## Environment Variables

Create a `.env` file in each directory with the following variables:

### `backend/.env`
```
PORT=4000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
ADMIN_EMAIL=<admin-email>
ADMIN_PASSWORD=<admin-password>
CLOUDINARY_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
```

### `frontend/.env`
```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=<your-razorpay-key-id>
```

### `admin/.env`
```
VITE_BACKEND_URL=http://localhost:4000
```

> **Warning:** Never commit `.env` files to version control. The included `.gitignore` already excludes them.

---

## API Endpoints

### User Routes — `/api/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login user |
| POST | `/admin` | Admin login |

### Product Routes — `/api/product`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/list` | Get all products |
| POST | `/add` | Add a product (admin only) |
| POST | `/remove` | Remove a product (admin only) |
| POST | `/single` | Get single product details |

### Cart Routes — `/api/cart`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/add` | Add item to cart |
| POST | `/update` | Update cart item quantity |
| POST | `/get` | Get user's cart |

### Order Routes — `/api/order`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/place` | Place order (COD) |
| POST | `/stripe` | Place order (Stripe) |
| POST | `/razorpay` | Place order (Razorpay) |
| POST | `/verifyStripe` | Verify Stripe payment |
| POST | `/verifyRazorpay` | Verify Razorpay payment |
| POST | `/userorders` | Get logged-in user's orders |
| POST | `/list` | Get all orders (admin only) |
| POST | `/status` | Update order status (admin only) |

---

## Deployment

Each part of the application includes a `vercel.json` configuration for deployment on **Vercel**:

- **Backend** — Deploy as a serverless function on Vercel (or any Node.js hosting like Render, Railway)
- **Frontend** — Deploy as a static site on Vercel
- **Admin** — Deploy as a separate static site on Vercel

Make sure to set the environment variables in your hosting provider's dashboard.


