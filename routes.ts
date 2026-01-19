import {Router, Response, Request} from "express";
import TaskController from "./src/controllers/taskcontroller";
import TaskService from "./src/services/TaskService";

const taskController = new TaskController();

const router = Router();

router.get('/task', taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', taskController.add);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;
