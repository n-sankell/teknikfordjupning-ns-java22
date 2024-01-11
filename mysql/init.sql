CREATE DATABASE IF NOT EXISTS mysql;
USE mysql;

CREATE TABLE IF NOT EXISTS greeting (
    greeting_id CHAR(36) PRIMARY KEY,
    greeting_value VARCHAR(255) NOT NULL
);

INSERT INTO greeting (greeting_id, greeting_value)
SELECT '550e8400-e29b-41d4-a716-446655440000', 'Hello from MySQL'
WHERE NOT EXISTS (
    SELECT greeting_id FROM greeting WHERE greeting_id = '550e8400-e29b-41d4-a716-446655440000'
);

INSERT INTO greeting (greeting_id, greeting_value)
SELECT '660e9511-e29b-51d5-a716-546655440001', 'Hello again from MySQL'
WHERE NOT EXISTS (
    SELECT greeting_id FROM greeting WHERE greeting_id = '660e9511-e29b-51d5-a716-546655440001'
);

GRANT ALL PRIVILEGES ON mysql.* TO 'user'@'%';
FLUSH PRIVILEGES;
