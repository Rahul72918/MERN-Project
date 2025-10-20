import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import todoRoute from "./routes/todo.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config();
const PORT = process.env.PORT || 4001;
const DB_URI = process.env.MONGODB_URI;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"]
}))
// Database connection code
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("connected to MongoDb");
  }
  catch (error) {
    console.log(error);
  }
}

// Call the function
connectDB();

//routes

app.use("/todo", todoRoute);
app.use("/user", userRoute);




app.listen(PORT, () => {
  console.log(` listening on port ${PORT}`)
})
