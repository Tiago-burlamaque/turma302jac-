import mysql2 from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql2.createPool("mysql://root:zSxSydkagoNYOgbTyXbxneSYAzqEcQBh@nozomi.proxy.rlwy.net:37751/railway" || {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "futlast",
    database: process.env.DB || "jaco302"
})

export default db;