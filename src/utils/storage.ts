import multer, { Multer } from "multer";

 const Storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        const splitExtension = file.originalname.split('.'); // separando no ponto para pegar o nome original, oque vem antes do array, fica na primeira posição, oque vem depois, na segunda.

        const extension = `.${splitExtension[1]} `
        cb(null, `${splitExtension[0]} ${Date.now()} ${extension}`); //pegando o nome do arquivo. A gente usa tamplate string porque tem que garantir que os arquivos não tenham nome igual, aí adiciona a dat e hora, assim muvai ser sempre diferente 
    }
});

// criando uma constante storage que vai salvar os arquivos, cb = callback 

export default Storage;