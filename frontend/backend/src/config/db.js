import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql2.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    passwor: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

export default db;