import app from "./app.js";
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.MYSQLPORT

app.listen(PORT, () => {
    console.log(`Api rodando na porta ${PORT}`)
})