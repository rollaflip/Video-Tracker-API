CREATE DATABASE VideoTracker;

USE VideoTracker;

CREATE TABLE IF NOT EXISTS `Videos` (
  `id` int(10) NOT NULL auto_increment,
  `name` carchar(255) NOT NULL,
  `brand` carchar(255)NOT NULL,
  `published` date NOT NULL,
  PRIMARY KEY(`id`)
);
CREATE TABLE IF NOT EXISTS `Views` (
  `id` int(10) NOT NULL auto_increment,
  `viewDate` date NOT NULL,
  `videoID` carchar(255)NOT NULL,
  PRIMARY KEY(`id`)
);
-- relational db      video has many views.
-- 2nd table:  Views  {id, time viewed, video id}
-- query to vid db collects all views with same video id, optional param for date after filter

-- SELECT name, brand, published as 'published'
-- (SELECT Count(*) FROM  Views WHERE videoId = 'someID' AND published >= 'someDate') as 'count'
-- From Videos WHERE id = 'someID'
-- ORDER BY published
