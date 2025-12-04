import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controller/todo.controller.js';
import { authenticate } from '../middleware/authorize.js';

const router = express.Router()

router.post("/create", authenticate,createTodo);
router.get("/fetch",authenticate, getTodos);
router.delete("/delete/:id",authenticate, deleteTodo);
router.put("/update/:id",authenticate,updateTodo);

export default router;