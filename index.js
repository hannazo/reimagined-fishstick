const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');


function init() {
    console.log(`
    ******************************
    *                            *
    *      EMPLOYEE MANAGER      *
    *                            *
    ****************************** 
  `);

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
                    console.log("Let's view all Employess");
                    mainMenu()
                    break;
                case "Add Employee":
                    console.log("Let's add an employee");
                    mainMenu()
                    break;
                case "Update Employee Role":
                    console.log("Let's update an employee Role");
                    mainMenu()
                    break;
                case "View All Roles":
                    console.log("Let's view all roles");
                    viewAllRoles()
                    break;
                case "Add Role":
                    console.log("Let's add a role");
                    mainMenu()
                    break;
                case "View All Departments":
                    viewAllDepartments();
                    break;
                case "Add Department":
                    console.log("Let's add a department");
                    mainMenu()
                    break;
                default:
                    console.log("Thank you for using Employee Manager");
            }
        });
    };

    function viewAllRoles() {
        db.query('SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary FROM role JOIN department ON role.department_id = department.id', (err, result) => {
            if  (err) {
                console.log(err);
            }
            console.table(result);
            mainMenu();
        })
    }

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
