CREATE DATABASE IF NOT EXISTS user_crud;
USE user_crud;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
