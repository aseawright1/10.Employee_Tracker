// creating the connection
const mysql = require('mysql')
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8080,
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
})
connection.connect((err) => {
    if (err) throw (err)
    mainMenu()
})

// main menu and prompts screen
function mainMenu() {
    inquirer.prompt({
        type: 'list',
        message: 'Make a selection',
        name: 'selection',
        choices: ['View all employees', 'Add employee', 'Update employee role', 'View departments', 'Add department', 'View roles', 'Add role', "End session"]
    })
    .then( answer => {
        switch (answer.selection) {
            case 'View all employees': viewAllEmps(); break
            case 'Add employee': addEmps(); break
            case 'Update employee role': updateRoles(); break
            case 'View departments': viewDepts(); break
            case 'Add departments': addDepts(); break
            case 'View roles': viewRoles(); break
            case 'Add role': addRoles(); break
            case 'End session': connection.end(); break
        }
    })
}

// prompts below
