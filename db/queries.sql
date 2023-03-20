SELECT role.id AS id, role.title AS title, department.name AS department, role.salary AS salary
FROM role
JOIN department ON role.department_id = department.id;

SELECT employee.id AS id, 
employee.first_name AS first_name, 
employee.last_name AS last_name, 
role.title AS title, 
department.name AS department, 
role.salary AS salary,
CONCAT(manager.first_name, ' ', manager.last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
JOIN employee manager ON employee.manager_id = manager.id;