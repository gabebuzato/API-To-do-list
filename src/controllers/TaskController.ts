import { Request, Response } from "express";
import { v4 as uuid, v4 } from "uuid";
import { Multer } from "multer";

import TaskService from "../services/TaskService";
import { Task } from "../models/Task";
import { getSchema, getByIdSchema, addSchema, updateSchema, updateSchemaParams, deleteSchemaParams } from "../schemas/TaskSchema";
import Storage from "../utils/storage";

const taskService = new TaskService();

class TaskController{

    constructor(){

    }

    async get(req: Request, res: Response){
        
        try {
             const status = req.query.status;
             await getSchema.validate(req.query);


            const result = taskService.get(status as string);
            res.json(result);
            res.status(200);

        } catch (error) {
            res.json({error: 'invalid status parameter'});
            res.status(401);
        }

    }

    async add(req: Request, res: Response) {

         try{
                await addSchema.validate(req.body, {strict: true});

                const id = uuid();

                req.body.id = id;

                const result = taskService.add(req.body);
                res.json(result);
                res.status(201);
         } catch (error) {
            res.json({error: error});
            res.status(401);
         }   
    }

    async getById(req: Request, res: Response) {
        const {id_task} = req.params;

        try {
            getByIdSchema.validate(req.params);
            const result = taskService.getById(id_task); 
            res.json(result);
        } 
        catch (error) {
            res.json({error: error});
            res.status(401);
        }

    }

    async update(req: Request, res: Response){
        try{

            const { id_task } = req.params;

            await updateSchema.validate(req.body);
            await updateSchemaParams.validate(id_task);

            const result = taskService.update( req.body, id_task );

            if(Object.keys(result).length > 0){
                res.json(result);
            } else{
                res.json({error: "Task not found"});
                res.status(404);
            }

        } catch(error){
            res.json({error: error});
            res.status(401);
        }
    }
    
    async delete(req: Request, res: Response){

        try{
            const {id_task} = req.params;

            await deleteSchemaParams.validate(id_task);

            const result = taskService.delete(id_task);
            
        } catch(error){
            res.json({error: error});
        }
    }
}

export default TaskController;