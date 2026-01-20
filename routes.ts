import {Router, Response, Request} from "express";
import TaskController from "./src/controllers/taskcontroller";

import Storage from "./src/utils/storage";
import multer from "multer";

const taskController = new TaskController();

const router = Router();

const upload = multer({storage: Storage})

router.get('/task', taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', upload.single('file'), taskController.add);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;
