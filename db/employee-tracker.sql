DROP DATABASE IF EXISTS employee-tracker_db;
CREATE database employee-tracker.db;

USE employee-tracker.db;

CREATE TABLE department
(
  dept_id INT NOT NULL,
  dept_name VARCHAR(25) NULL,
  PRIMARY KEY (dept_id)
);

CREATE TABLE role
(
  id INT NOT NULL,
  title VARCHAR(25) NULL,
  salary DECIMAL(7,2),
  dept_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employees
(
  id INT NOT NULL,
  first_name VARCHAR(25) NULL,
  last_name VARCHAR(25) NULL,
  role_id INT NULL,
  mgr_id VARCHAR(25) NULL,
  PRIMARY KEY (id)
);


SELECT * FROM employees;