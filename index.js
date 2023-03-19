const inquirer = require('inquirer');
const sequelize = require('./config/connection');

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
                    mainMenu()
                    break;
                case "Add Role":
                    console.log("Let's add a role");
                    mainMenu()
                    break;
                case "View All Departments":
                    console.log("Let's view all departments");
                    mainMenu()
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

    mainMenu();
};

init();
