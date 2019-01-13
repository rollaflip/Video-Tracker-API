CREATE DATABASE VideoTracker;

USE VideoTracker;

-- CREATE TABLE IF NOT EXISTS `Video` (
--   `id` int(10) NOT NULL auto_increment,
--   `name` carchar(255) NOT NULL,
--   `brand` carchar(255)NOT NULL,
--   `published` date NOT NULL,
--   PRIMARY KEY(`id`)
-- );
-- CREATE TABLE IF NOT EXISTS `View` (
--   `id` int(10) NOT NULL auto_increment,
--   `viewDate` date NOT NULL,
--   `videoID` carchar(255)NOT NULL,
--   PRIMARY KEY(`id`)
-- );


-- Table Definition ----------------------------------------------

CREATE TABLE "Videos" (
    id integer DEFAULT nextval('"Videos_id_seq"'::regclass) PRIMARY KEY,
    name text NOT NULL,
    brand text NOT NULL,
    published integer NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX "Videos_pkey" ON "Videos"(id int4_ops);

-- Table Definition ----------------------------------------------

CREATE TABLE "Views" (
    id integer DEFAULT nextval('"Views_id_seq"'::regclass) PRIMARY KEY,
    date integer NOT NULL,
    "videoID" integer NOT NULL REFERENCES "Videos"(id) ON DELETE CASCADE
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX "Views_pkey" ON "Views"(id int4_ops);


-- relational db      video has many views.
-- 2nd table:  Views  {id, time viewed, video id}
-- query to vid db collects all views with same video id, optional param for date after filter

-- SELECT name, brand, published as 'published'
-- (SELECT Count(*) FROM  Views WHERE videoId = 'someID' AND published >= 'someDate') as 'count'
-- From Videos WHERE id = 'someID'
-- ORDER BY published
