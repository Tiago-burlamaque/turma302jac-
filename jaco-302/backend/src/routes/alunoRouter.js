import { Router } from "express";
import { adicionarAluno, deletarAluno, editarAluno, LoginAluno } from "../controller/alunoController.js";


const alunoRouter = Router()

alunoRouter.post('/aluno/login', LoginAluno)
alunoRouter.post('/aluno', adicionarAluno)
alunoRouter.patch('/aluno/:id', editarAluno)
alunoRouter.delete('/aluno/:id', deletarAluno)

export default alunoRouter;