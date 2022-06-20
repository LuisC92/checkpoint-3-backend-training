DROP DATABASE IF EXISTS music_express;

CREATE DATABASE music_express;

USE music_express;

CREATE TABLE album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    genre VARCHAR(255),
    picture VARCHAR(255),
    artist VARCHAR(255)
);

CREATE TABLE track (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(128),
    youtube_url VARCHAR(255),
    album_id INT,
    FOREIGN KEY (album_id) REFERENCES album(id)
);

ALTER TABLE track 
  ADD CONSTRAINT album_id 
  FOREIGN KEY (album_id) 
  REFERENCES album(id) 
  ON DELETE CASCADE;