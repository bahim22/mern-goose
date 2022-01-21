import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos";

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default router;

//routes for crud via db; imp func and pass as the params to handle req
