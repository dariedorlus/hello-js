import mysql from "mysql"
import dotenv from "dotenv"

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

const getStudents = (lastName) => {
    const query = `SELECT * 
    FROM students
    WHERE last_name LIKE "${lastName}"`

    const escapedquery = `SELECT * 
    FROM students
    WHERE last_name Like ?`
    //OR last_name = ?`

    let escapedLastname = connection.escape(lastName)

    connection.query(escapedquery, [lastName], (error, results) =>{
    //connection.query(query,(error, results) =>{

        if(error){
            console.error(error)
        }

        console.log(results)

    })
}

getStudents("Anty")

connection.end()
//const test = connection.que