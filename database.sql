CREATE DATABASE perntodo;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    status VARCHAR(255),
);