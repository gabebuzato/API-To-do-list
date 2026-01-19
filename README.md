# 📝 To-Do List API (Backend)

API RESTful para gerenciamento de tarefas (To-Do List), desenvolvida em **Node.js** com **TypeScript**, utilizando uma arquitetura em camadas (**Controller, Service e Repository**) para garantir organização, escalabilidade e fácil manutenção do código.

Este projeto foi desenvolvido com foco em aprendizado e prática de backend, boas práticas de API REST e estruturação profissional de projetos.

---

##  Funcionalidades

-  Criar uma nova tarefa
-  Listar todas as tarefas
-  Atualizar uma tarefa existente
-  Remover uma tarefa
-  Marcar tarefa como concluída

---

##  Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Nodemon
- Git & GitHub

---

##  Estrutura do Projeto


TODOLIST-BACKEND
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── TaskController.ts
│   ├── models/
│   │   └── Task.ts
│   ├── repositories/
│   │   └── TaskRepository.ts
│   ├── services/
│   │   └── TaskService.ts
│   └── index.ts
├── .gitignore
├── package.json
├── package-lock.json
├── requisitos.txt
├── routes.ts
└── README.md



Arquitetura do Projeto

O projeto segue o padrão de arquitetura em camadas, separando responsabilidades:

Controller
Responsável por receber as requisições HTTP e retornar as respostas.

Service
Contém a lógica de negócio da aplicação.

Repository
Responsável pela manipulação e acesso aos dados.

Model
Define a estrutura da entidade Task.

Essa separação facilita a manutenção, os testes e a evolução futura do sistema.



Como executar o projeto
1️⃣ Clone o repositório
git clone https://github.com/gabebuzato/API-To-do-list.git

2️⃣ Acesse a pasta do projeto
cd TODOLIST-BACKEND

3️⃣ Instale as dependências
npm install

4️⃣ Execute a aplicação
npm run dev


O servidor será iniciado em:

http://localhost:3000
