import express from "express";
import router from "./routes.js";

const server = express();

server.use(router);
server.use(express.urlencoded({extended: true}));

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


