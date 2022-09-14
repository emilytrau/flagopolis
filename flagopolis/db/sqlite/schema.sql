CREATE TABLE ctf_instances (
	ctf_id INTEGER NOT NULL PRIMARY KEY,
  ctf_name TEXT NOT NULL
);

CREATE TABLE players (
	ctf_id INTEGER NOT NULL,
  player_id INTEGER NOT NULL,
  player_name TEXT NOT NULL,
  team_id INTEGER,
  PRIMARY KEY (ctf_id, player_id),
  FOREIGN KEY (ctf_id) 
    REFERENCES ctf_instances (ctf_id) 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION,
  FOREIGN KEY (team_id)
    REFERENCES teams (team_id) 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION
);

CREATE TABLE teams (
	ctf_id INTEGER NOT NULL,
  team_id INTEGER NOT NULL,
  team_name TEXT NOT NULL,
  PRIMARY KEY (ctf_id, team_id),
  FOREIGN KEY (ctf_id) 
    REFERENCES ctf_instances (ctf_id) 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION
);

CREATE TABLE challenges (
	ctf_id INTEGER NOT NULL,
  challenge_id INTEGER NOT NULL,
  challenge_name TEXT NOT NULL,
  PRIMARY KEY (ctf_id, challenge_id),
  FOREIGN KEY (ctf_id) 
    REFERENCES ctf_instances (ctf_id) 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION
);

