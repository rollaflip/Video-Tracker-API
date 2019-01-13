--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Videos; Type: TABLE; Schema: public; Owner: Yen
--

CREATE TABLE public."Videos" (
    id integer NOT NULL,
    name text NOT NULL,
    brand text NOT NULL,
    published integer NOT NULL
);


ALTER TABLE public."Videos" OWNER TO "Yen";

--
-- Name: Videos_id_seq; Type: SEQUENCE; Schema: public; Owner: Yen
--

CREATE SEQUENCE public."Videos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Videos_id_seq" OWNER TO "Yen";

--
-- Name: Videos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Yen
--

ALTER SEQUENCE public."Videos_id_seq" OWNED BY public."Videos".id;


--
-- Name: Views; Type: TABLE; Schema: public; Owner: Yen
--

CREATE TABLE public."Views" (
    id integer NOT NULL,
    date integer NOT NULL,
    "videoID" integer NOT NULL
);


ALTER TABLE public."Views" OWNER TO "Yen";

--
-- Name: Views_id_seq; Type: SEQUENCE; Schema: public; Owner: Yen
--

CREATE SEQUENCE public."Views_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Views_id_seq" OWNER TO "Yen";

--
-- Name: Views_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Yen
--

ALTER SEQUENCE public."Views_id_seq" OWNED BY public."Views".id;


--
-- Name: Videos id; Type: DEFAULT; Schema: public; Owner: Yen
--

ALTER TABLE ONLY public."Videos" ALTER COLUMN id SET DEFAULT nextval('public."Videos_id_seq"'::regclass);


--
-- Name: Views id; Type: DEFAULT; Schema: public; Owner: Yen
--

ALTER TABLE ONLY public."Views" ALTER COLUMN id SET DEFAULT nextval('public."Views_id_seq"'::regclass);


--
-- Name: Videos Videos_pkey; Type: CONSTRAINT; Schema: public; Owner: Yen
--

ALTER TABLE ONLY public."Videos"
    ADD CONSTRAINT "Videos_pkey" PRIMARY KEY (id);


--
-- Name: Views Views_pkey; Type: CONSTRAINT; Schema: public; Owner: Yen
--

ALTER TABLE ONLY public."Views"
    ADD CONSTRAINT "Views_pkey" PRIMARY KEY (id);


--
-- Name: Views Views_videoID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Yen
--

ALTER TABLE ONLY public."Views"
    ADD CONSTRAINT "Views_videoID_fkey" FOREIGN KEY ("videoID") REFERENCES public."Videos"(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

