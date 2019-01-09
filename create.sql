CREATE DATABASE VideoTracker;

USE VideoTracker;

CREATE TABLE IF NOT EXISTS `Videos` (
  `id` int(10) NOT NULL auto_increment,
  `name` carchar(255) NOT NULL,
  `brand` carchar(255)NOT NULL,
  `published` date NOT NULL,
  'viewcount' int(10) DEFAULT 0,
  PRIMARY KEY(`id`)
);
