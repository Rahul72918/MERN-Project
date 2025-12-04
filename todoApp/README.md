# MERN Stack Todo Application

A full-stack Todo application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, CRUD operations, and a modern responsive UI.

## 🚀 Features

- **User Authentication**: Secure signup and login system with JWT tokens
- **Todo Management**: Create, read, update, and delete todos
- **User-specific Todos**: Each user can only access their own todos
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback
- **Protected Routes**: Route protection based on authentication status

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Parse HTTP request cookies
- **zod** - Schema validation

### Frontend
- **React** - Frontend JavaScript library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications

## 📁 Project Structure

```
todoApp/
├── backend/
│   ├── controller/
│   │   ├── todo.controller.js    # Todo CRUD operations
│   │   └── user.controller.js    # User authentication logic
│   ├── jwt/
│   │   └── token.js              # JWT token generation
│   ├── middleware/
│   │   └── authorize.js          # Authentication middleware
│   ├── model/
│   │   ├── todo.model.js         # Todo schema definition
│   │   └── user.model.js         # User schema definition
│   ├── routes/
│   │   ├── todo.route.js         # Todo API routes
│   │   └── user.route.js         # User API routes
│   ├── .env                      # Environment variables (not in repo)
│   ├── index.js                  # Main server file
│   └── package.json              # Backend dependencies
└── frontend/
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── components/
    │   │   ├── Home.jsx           # Main todo interface
    │   │   ├── Login.jsx          # Login form
    │   │   ├── PageNotFound.jsx   # 404 error page
    │   │   └── Signup.jsx         # Registration form
    │   ├── App.jsx                # Main app component with routing
    │   ├── index.css              # Global styles
    │   └── main.jsx               # React app entry point
    ├── index.html                 # HTML template
    ├── package.json               # Frontend dependencies
    └── vite.config.js             # Vite configuration
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=4001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
```

4. Start the backend server:
```bash
npm start
```
The backend server will run on `http://localhost:4001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

## 🏗️ Code Architecture

### Backend Architecture

#### Models
- **User Model** (`user.model.js`): Defines user schema with email, password, and name fields
- **Todo Model** (`todo.model.js`): Defines todo schema with text, completed status, and user reference

#### Controllers
- **User Controller** (`user.controller.js`): Handles user registration, login, and authentication logic
- **Todo Controller** (`todo.controller.js`): Manages CRUD operations for todos

#### Middleware
- **Authorization Middleware** (`authorize.js`): Verifies JWT tokens and protects routes

#### Routes
- **User Routes** (`user.route.js`): API endpoints for user authentication
- **Todo Routes** (`todo.route.js`): API endpoints for todo operations

### Frontend Architecture

#### Components
- **App.jsx**: Main component handling routing and authentication state
- **Home.jsx**: Dashboard displaying user's todos with CRUD functionality
- **Login.jsx**: User login form with validation
- **Signup.jsx**: User registration form
- **PageNotFound.jsx**: 404 error page

#### Authentication Flow
1. User logs in/signs up
2. JWT token is stored in localStorage
3. Token is sent with API requests for authentication
4. Protected routes check for token presence

## 🔐 Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Protected API routes
- CORS configuration for secure cross-origin requests
- Environment variables for sensitive data
- Input validation with Zod schema

## 📡 API Endpoints

### User Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `GET /user/logout` - User logout

### Todo Operations
- `GET /todo/` - Get all todos for authenticated user
- `POST /todo/` - Create a new todo
- `PUT /todo/:id` - Update a todo
- `DELETE /todo/:id` - Delete a todo

## 🚀 Deployment

### Environment Variables
Make sure to set up the following environment variables in production:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET_KEY` - A secure secret key for JWT tokens
- `PORT` - Server port (default: 4001)
- `FRONTEND_URL` - Your frontend URL for CORS

### Build Commands
```bash
# Build frontend for production
cd frontend
npm run build

# Start backend in production
cd backend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rahul** - Full Stack Developer

## 🙏 Acknowledgments

- MongoDB for the database solution
- Express.js team for the backend framework
- React team for the frontend library
- Tailwind CSS for the styling framework

---

*Built with ❤️ using the MERN stack*