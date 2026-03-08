import db from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const LoginAluno = async (req, res) => {
    try {
        const { nome, matricula, senha } = req.body;

        if (nome  === "" || matricula === "" || senha === "") {
            return res.status(400).json({ Message: "matricula ou senha inválidos. São campos obrigatórios." })
        }

        const [rows] = await db.query("SELECT id, nome, matricula, senha FROM aluno WHERE matricula = ? AND ativo = 1 LIMIT 1", [matricula])

        if (rows.length === 0) {
            return res.status(401).json({ Message: "Credênciais inválidas" })
        }

        const user = rows[0]

        const ok = await bcrypt.compare(senha, user.senha);

        if (!ok) {
            return res.status(401).json({ Message: "Credênciais inválidas, senha inválida" })
        }

        // Criar token JWT - Crachar do usuário
        const token = jwt.sign(
            {
                sub: user.id,
                matricula: user.matricula,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        )

        return res.status(200).json({
            message: "Login com sucesso.",
            token: token,
            user: {
                id: user.id,
                matricula: user.matricula,
                nome: user.nome,
            }
        });

    } catch (error) {
        res.status(400).json({ Message: "Ocorreu um erro: ", erro: error.message })
    }
}

export const editarAluno = async (req, res) => {
    try {
        const { nome, matricula, senha } = res.body;
        let id = req.params.id;

        const [results] = await db.query('UPDATE aluno SET nome = ?, matricula = ?, senha = ? WHERE id = ?', [nome, matricula, senha, id])

        if (results.affectedRows === 0) {
            return res.status(400).json({ message: "aluno não encontrado." })
        }

        return res.status(200).json({ message: "aluno atualizado." })
    } catch (error) {
        res.status(400).json({ message: "Erro ao editar o aluno.", error: error.message })

    }
}

export const deletarAluno = async (req, res) => {
    try {
        const id = req.params.id;

        const [results] = await db.query('DELETE FROM aluno WHERE id = ?', [id])

        if (results.affectedRows === 0) { // aluno não foi afetado
            return res.status(400).json({ message: "aluno não encontrado." })
        }

        return res.status(200).json({ message: "aluno deletado." })
    } catch (error) {
        res.status(400).json({ message: "Erro ao deletar aluno", error: error.message })
    }
}

export const adicionarAluno = async (req, res) => {
    try {

        const nome = req.body.nome;
        const matricula = req.body.matricula;
        const senha = req.body.senha;


        if (nome === "")
            return res.status(400).json({ message: "Nome não deve estar vázio." })

        const saltRound = 10
        const hashPassword = await bcrypt.hash(senha, saltRound) // Senha convertida para hash - criptografa a senha

        const [rows] = await db.query('INSERT INTO aluno (nome, matricula, senha, ativo) VALUES (?, ?, ? , ?)', [nome, matricula, hashPassword, 1])

        if (rows.affectedRows === 0)
            return res.status(400).json({ message: "Não foi possível inserir o aluno    ." })

        return res.status(201).json({ message: "aluno    cadastrado com sucesso." })
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar aluno ", erro: error.message })
    }

}