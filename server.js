// creating the connection
const mysql = require('mysql')
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
})
connection.connect((err) => {
    if (err) throw (err)
    mainMenu()
})

// main menu and prompts screen below
function mainMenu() {
    inquirer.prompt({
        type: 'list',
        message: 'Make a selection',
        name: 'selection',
        choices: ['View all employees', 'Add employee', 'Update employee role', 'View departments', 'Add department', 'View roles', 'Add role', "End session"]
    })
    .then(answer => {
        switch (answer.selection) {
            case 'View all employees': viewAllEmps(); break
            case 'Add employee': addEmps(); break
            case 'View departments': viewDepts(); break
            case 'Add departments': addDepts(); break
            case 'View roles': viewRoles(); break
            case 'Add role': addRoles(); break
            case 'Update employee role': updateRoles(); break
            case 'End session': connection.end(); break
        }
    })
}

function viewAllEmps() {
    connection.query('SELECT * FROM employees', function(err, res) {
        if (err) throw err
        console.table(res)
        mainMenu()
    })
}
function addEmps(first_name, last_name, role_id, mgr_id) {
    inquirer.prompt([
        { type: 'input', message: 'First name', name: 'newFirstName' },
        { type: 'input', message: 'Last name', name: 'newLastName' },
        { type: 'number', message: 'Enter employee\'s role ID', name: 'newEmpRole' },
        { type: 'input', message: 'Enter manager name', name: 'newMgrID' }
    ])
    .then(answer => {
        connection.query('INSERT INTO employees SET ?', {
            first_name: answer.newFirstName,
            last_name: answer.newLastName,
            role_id: answer.newEmpRole,
            mgr_id: answer.newMgrID
        }, function (err, res) {
            if (err) throw err
            console.log(`${answer.newFirstName} ${answer.newLastName} added to database`)
            mainMenu();
        })
    })
}
function viewDepts() {

}
function addDepts() {

}
function viewRoles() {

}
function addRoles() {
    
}
function updateRoles() {
    
}