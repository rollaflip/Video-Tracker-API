USE [master]
GO

CREATE DATABASE [VideoTracker]
GO

USE VideoTracker
GO

CREATE TABLE Videos (
  id int IDENTITY(1,1),
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  published DATE,
  PRIMARY KEY(id));
GO

CREATE TABLE Views (
  id int IDENTITY(1,1),
  videoID int NOT NULL,
  updatedAt DATE NOT NULL,
  createdAt DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (videoID) REFERENCES Videos(id) ON DELETE CASCADE);
GO
