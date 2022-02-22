set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.

drop schema "public" cascade;

create schema "public";

CREATE TABLE "moves" (
	"gameId" integer NOT NULL,
	"moveId" serial NOT NULL,
	"start" integer NOT NULL,
	"end" integer NOT NULL,
  "promotion" TEXT,
	"createdAt" timestamp with time zone NOT NULL default now(),
	CONSTRAINT "moves_pk" PRIMARY KEY ("moveId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "games" (
	"gameId" serial NOT NULL,
	"playerName" TEXT NOT NULL,
	"playerSide" TEXT NOT NULL,
	"message" TEXT NOT NULL,
	"opponentName" TEXT,
	"opponentSide" TEXT NOT NULL,
	"resolved" BOOLEAN NOT NULL,
	"createdAt" timestamp with time zone NOT NULL default now(),
	CONSTRAINT "games_pk" PRIMARY KEY ("gameId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "moves" ADD CONSTRAINT "moves_fk0" FOREIGN KEY ("gameId") REFERENCES "games"("gameId");
