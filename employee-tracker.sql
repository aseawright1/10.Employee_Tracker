DROP DATABASE IF EXISTS employee-tracker_db;
CREATE database employee-tracker.db;

USE employee-tracker.db;

CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(50) NULL,
  last_name VARCHAR(50) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL,
  title VARCHAR(50) NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
  );
  
  CREATE TABLE department (
  id INT NOT NULL,
  dept_name VARCHAR(50) NULL,
  PRIMARY KEY (id)
  );

SELECT * FROM employee_list;