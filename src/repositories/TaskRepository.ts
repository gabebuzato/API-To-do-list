import { Task } from "../models/Task";

class TaskRepository{

    private tasks: Task[];

    constructor() {
        this.tasks = []; // array para armazenar as tarefas que estão sendo adicionadas pelo add
    }

    get(): Task[] {
        return this.tasks

        //função para mostrar as tarefas pelo get 
    }

    add ( data: Task ): Task{
        this.tasks.push(data);
        return data;

        //função de adicionar pelo post
    }

    update(data: Task, position: any) {
        this.tasks[position] = data;
        return data;

        // função pra fazer update pelo patch
    }

    delete(position: any) {
        delete this.tasks[position];
        return position
        
        //função de deletar pelo delete
    }
}

export default TaskRepository;