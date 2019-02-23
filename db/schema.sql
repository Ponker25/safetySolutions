CREATE DATABASE safteySolutions_db;

USE safetySolutions_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50),
    createdAt TIMESTAMP default current_timestamp NOT NULL,
    department VARCHAR(20) NOT NULL,
    position_title VARCHAR(50) NOT NULL,
    incentive_score INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE rewards (
    id INT NOT NULL AUTO_INCREMENT,
    rewards_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id)
);

CREATE TABLE checklist (
    id INT NOT NULL AUTO_INCREMENT,
    forms_id INT NOT NULL AUTO_INCREMENT,
    
    PRIMARY(id)
)

CREATE TABLE incidents (
    id INT NOT NULL AUTO_INCREMENT,
    incident VARCHAR(100) NOT NULL,
    incident_description VARCHAR(200) NOT NULL,
    incident_id INTEGER AUTO_INCREMENT,
    PRIMARY(id)     
)

CREATE TABLE survey (
    id INT NOT NULL AUTO_INCREMENT,
    survey_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY(id)
)


SELECT * FROM users
