CREATE DATABASE safteySolutions_db;

USE safetySolutions_db;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50),
    createdAt TIMESTAMP default current_timestamp NOT NULL,
    department VARCHAR(20) NOT NULL,
    position_title VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM users