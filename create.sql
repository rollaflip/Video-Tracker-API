CREATE DATABASE VideoTracker;

USE VideoTracker;

CREATE TABLE IF NOT EXISTS `Videos` (
  `id` int(10) NOT NULL auto_increment,
  `name` carchar(255),
  `brand` carchar(255),
  `publisheddate` date,
  'viewcount' numeric(9,2),
  PRIMARY KEY(`id`)
);
