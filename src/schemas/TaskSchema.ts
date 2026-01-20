import { object, string } from "yup";

export const getSchema = object().shape({ // o shape é para você especificar como os dados vão vir la da rota
    status: string().required().test("isValid", (status) =>{      // o test é a verificação em si do meu status, colocamos o nome da verificação e depois a função a ser executada
        if( status === 'in_progress' || status === 'completed'){
            return true;
        } else {
            return false;
        }
    })
});

export const getByIdSchema = object().shape({
    id_task: string().required().uuid()
});

export const addSchema = object().shape({
    descricao: string().required(),
    data: string().required(),
    status: string().required().test("addIsValid", (status) =>{
        if(status === 'in_progress' || status === 'completed'){
            return true;
        } else{
            return false;
        }
    })
});

export const updateSchema = object().shape({
    id: string().required(),
    descricao: string().required(),
    data: string().required(),
    status: string().required().test("updateIsValid", (status) =>{
        if(status === 'in_progress' || status === 'completed'){
            return true;
        } else{
            return false;
        }
    })
});

export const updateSchemaParams = string().required('id_task é obrigatório').uuid();

export const deleteSchemaParams = string().required().uuid();

// required quer dizer que ele tem que vim preenchido, é obrigatório

//nullable quer dizer que ele não é obrigatório

//uuid é id único universal, gera ele la no controller e recebe na const id