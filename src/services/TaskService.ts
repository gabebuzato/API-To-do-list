import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository;

class TaskService{

    constructor(){

    }

    add(data: Task): Task {
        return taskRepository.add(data);
    }


    get(status: string){
        const result = taskRepository.get();

        const tasks: Task[] = [];

        result.map((obj) =>{
            if(obj.status === status){
                tasks.push(obj);
            }
        })
        return tasks;
    }

    getById(id_task: string | string[] ): Task | {} {
        const result = taskRepository.get();

        let task = {};

         result.map((obj) => {     
            // fazendo um mapeamento no array para que retorne a tarefa que foi buscada pelo req.params, estou recebendo todas as tarefas que estão vindo do meu repository e verificando uma a uma, para ver qual atende ao id requisitado. A que atender será retornada como podemos ver em "return task".
            if(obj.id === id_task){
                task = obj;
            }
        });

        return task;
        
    }

    getIndexById(id_task: string): number {

        const result = taskRepository.get();
        let position: number = 99999; // posição improvável para o typescript não reclamar

        result.map((obj, index) => { // precisa verificar em qual posição do array o id da task que o usuário precisa alterar  está, eu fiz isso com o map porque aí a gente vai receber o objeto atual do array e o index dele, aí fazemos uma verificação: se o id do objeto atual for igual ao id requerido pelo usuário a gente atribui o id dessa task para a variavel position, assim temos a posição que está o objeto que devemos alterar dentro do array
            if(obj.id === id_task){
                position = index;
            } 
        }); 
        
        return position;
    }

    update(data: Task, id_task: string | string [] ) {
        const position = this.getById(id_task);
        
        if (position != 99999) { // verifica se não é a posição que o position inicia e então, se não for, edita
            return taskRepository.update(data, position);
        } else{
            return {}; // se for, da erro
        }
    }

    delete(id_task: string | string[]){
        const position = this.getById(id_task);

        if (position != 99999) { // verifica se não é a posição que o position inicia e então, se não for, deleta 
            return taskRepository.delete( position );
        } else{
            return {}; // se for, da erro
        }
    }
}

export default TaskService;