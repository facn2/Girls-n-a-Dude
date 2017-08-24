BEGIN;

DROP TABLE IF EXISTS members;

CREATE TABLE IF NOT EXISTS members (
id  SERIAL PRIMARY KEY,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
country VARCHAR(30) NOT NULL,
github TEXT NOT NULL,
image TEXT
);

INSERT INTO members (first_name, last_name, country, github, image)
VALUES ('Heather', 'Yun', 'South Korea', 'https://github.com/Heathercoraje', 'images/student/heather.jpg'),
 ('Vered', 'Rekanati', 'Israel', 'https://github.com/veredrec', 'images/student/vered.jpg'),
 ('Paul', 'Hanna', 'USA', 'https://github.com/paulhanna1933', 'images/student/paul.jpg'),
 ('Katia', 'Ashkar', 'Israel', 'https://github.com/katiaAsh', 'images/student/katia.jpg'),
('Sajeda', 'Zoabi', 'Israel', 'https://github.com/sajedazoabi', 'images/student/sajeda.jpg'),
 ('Matt', 'King', 'UK', 'https://github.com/matthewdking', 'images/student/king.jpg'),
 ('Harry', 'Dry', 'UK', 'https://github.com/harrydry', 'images/student/harry.JPG'),
 ('Amy', 'Tai', 'Hong Kong', 'https://github.com/Wyrd00', 'images/student/amy.jpg'),
 ('Leo', 'Yeung', 'Hong Kong', 'https://github.com/tyeung2017', 'images/student/leo.JPG'),
 ('Stefano', 'Rossi', 'Italy', 'https://github.com/rinoma', 'images/student/stefano.jpg');

COMMIT;


-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Heather', 'Yun', 'South Korea', 'https://github.com/Heathercoraje', 'images/student/heather.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Vered', 'Rekanati', 'Israel', 'https://github.com/veredrec', 'images/student/vered.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Paul', 'Hanna', 'USA', 'https://github.com/paulhanna1933', 'images/student/paul.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Katia', 'Ashkar', 'Israel', 'https://github.com/katiaAsh', 'images/student/katia.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Sajeda', 'Zoabi', 'Israel', 'https://github.com/sajedazoabi', 'images/student/sajeda.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Matt', 'King', 'UK', 'https://github.com/matthewdking', 'images/student/king.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Harry', 'Dry', 'UK', 'https://github.com/harrydry', 'images/student/harry.JPG');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Amy', 'Tai', 'Hong Kong', 'https://github.com/Wyrd00', 'images/student/amy.jpg');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Leo', 'Yeung', 'Hong Kong', 'https://github.com/tyeung2017', 'images/student/leo.JPG');
--
-- INSERT INTO members (first_name, last_name, country, github, image)
-- VALUES ('Stefano', 'Rossi', 'Italy', 'https://github.com/rinoma', 'images/student/stefano.jpg');
--
-- COMMIT;
