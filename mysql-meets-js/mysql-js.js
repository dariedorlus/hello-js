import mysql from "mysql";

const connection = mysql.createConnection({
    host: "34.75.194.146",
    user: "boca-code",
    password: "bocacodehellosql", 
    database: "E_Commerce"
})

const createCustomer =  (id, fname, lname, address) => {
    const query = `INSERT INTO Customers (Id, FirstName, LastName, Address)
                   VALUES
                   (${id}, "${fname}", "${lname}", "${address}");`
    
    console.log(query)

    connection.query(query, (error, results, fields) => {

        if(error){
            console.error(error)
        }

        console.log(results)
        console.log("fields", fields)

    })
    
}

createCustomer(7,"darie", "dorlus", "1 Apple St");
