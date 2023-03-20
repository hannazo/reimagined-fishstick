const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');

function init() {
    // Welcome message
    console.log(`
    ******************************
    *                            *
    *      EMPLOYEE MANAGER      *
    *                            *
    ****************************** 
  `);
    
    // Recurring main menu function
    function mainMenu() {
        inquirer.prompt([
            {
                type: "list",
                name: "menu",
                message: "What would you like to do?",
                choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
            }
        ])
        .then((data) => {
            switch(data.menu) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add Employee":
                    // console.log("Let's add an employee");
                    mainMenu()
                    break;
                case "Update Employee Role":
                    // console.log("Let's update an employee Role");
                    mainMenu()
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "Add Role":
                    // console.log("Let's add a role");
                    mainMenu()
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "Add Department":
                    // console.log("Let's add a department");
                    mainMenu()
                    break;
                default:
                    console.log("Thank you for using Employee Manager");
            }
        });
    };

    // View employee table
    function viewAllEmployees() {
        db.query(`SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS title, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`, (err, result) => {
            if  (err) {
                console.log(err);
            }
            console.table(result);
            mainMenu();
        })
    };

    // View role table
    function viewAllRoles() {
        db.query('SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary FROM role JOIN department ON role.department_id = department.id', (err, result) => {
            if  (err) {
                console.log(err);
            }
            console.table(result);
            mainMenu();
        })
    };

    // View department table
    function viewAllDepartments() {
        db.query('SELECT * FROM department', (err, result) => {
            if  (err) {
                console.log(err);
            }
            console.table(result);
            mainMenu();
        })
    };

    mainMenu();
};

init();
