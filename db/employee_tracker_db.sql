DROP DATABASE IF EXISTS employee_tracker_db;
CREATE database employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department
(
  dept_id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(25) NULL,
  PRIMARY KEY (dept_id)
);

CREATE TABLE role
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(25) NULL,
  salary DECIMAL(10,2),
  dept_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employees
(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(25) NULL,
  last_name VARCHAR(25) NULL,
  role_id INT NULL,
  mgr_id VARCHAR(25) NULL,
  PRIMARY KEY (id)
);


SELECT first_name AS "First Name", last_name AS "Last Name", role_id AS "Rople ID", mgr_id AS "Manager ID"
FROM employees;