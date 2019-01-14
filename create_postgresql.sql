CREATE DATABASE VideoTracker;

USE VideoTracker;

CREATE SEQUENCE "Videos_id_seq";

CREATE TABLE "Videos" (
    id integer DEFAULT nextval('"Videos_id_seq"'::regclass) PRIMARY KEY,
    name text NOT NULL,
    brand text NOT NULL,
    published date NOT NULL
);

CREATE SEQUENCE "Views_id_seq";
CREATE TABLE "Views" (
    id integer DEFAULT nextval('"Views_id_seq"'::regclass) PRIMARY KEY,
    "videoID" integer NOT NULL REFERENCES "Videos"(id) ON DELETE CASCADE,
    "createdAt" date,
    "updatedAt" date
);


