CREATE DATABASE VideoTracker;

USE VideoTracker;

CREATE TABLE "Videos" (
    id integer DEFAULT nextval('"Videos_id_seq"'::regclass) PRIMARY KEY,
    name text NOT NULL,
    brand text NOT NULL,
    published date NOT NULL
);

CREATE UNIQUE INDEX "Videos_pkey" ON "Videos"(id int4_ops);

CREATE TABLE "Views" (
    id integer DEFAULT nextval('"Views_id_seq"'::regclass) PRIMARY KEY,
    "VideoID" integer NOT NULL REFERENCES "Videos"(id)
);

CREATE UNIQUE INDEX "Views_pkey" ON "Views"(id int4_ops);
