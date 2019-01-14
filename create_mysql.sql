CREATE DATABASE VideoTracker;

USE VideoTracker;

CREATE TABLE Videos (
  id int AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  published DATE,
  PRIMARY KEY(id));

CREATE TABLE Views (
  id int AUTO_INCREMENT,
  videoID int NOT NULL,
  updatedAt DATE NOT NULL,
  createdAt DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (videoID) REFERENCES Videos(id) ON DELETE CASCADE);
