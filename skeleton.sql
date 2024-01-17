-- Active: 1699837608055@@127.0.0.1@3306@skeleton
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @ @UNIQUE_CHECKS, UNIQUE_CHECKS = 0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @ @SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema skeleton
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema skeleton
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `skeleton` DEFAULT CHARACTER SET utf8;

USE `skeleton`;

-- -----------------------------------------------------
-- Table `skeleton`.`user`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `skeleton`.`user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `username` VARCHAR(50) NOT NULL,
        `name` VARCHAR(50) NOT NULL,
        `bio` VARCHAR(255) NOT NULL,
        `weight` DECIMAL(5, 2) NOT NULL,
        `height` DECIMAL(5, 2) NOT NULL,
        `email` VARCHAR(50) NOT NULL,
        `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
        `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `skeleton`.`board`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `skeleton`.`board` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(100) NOT NULL,
        `content` VARCHAR(1024) NOT NULL,
        `cnt` INT NULL DEFAULT 0,
        `createdAt` DATETIME NULL DEFAULT now(),
        `updatedAt` DATETIME NULL DEFAULT now(),
        `creatorId` INT NULL,
        PRIMARY KEY (`id`),
        INDEX `fk_board_user_idx` (`creatorId` ASC) VISIBLE,
        CONSTRAINT `fk_board_user` FOREIGN KEY (`creatorId`) REFERENCES `skeleton`.`user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- Create Mate Table
CREATE TABLE
    IF NOT EXISTS `mate` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(50) NOT NULL,
        `image_path` VARCHAR(255) NOT NULL,
        `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
        `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`)
    );

-- Create Goal Table
CREATE TABLE
    IF NOT EXISTS `goal` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `user_id` INT NOT NULL,
        `weight_goal` DECIMAL(5, 2) NOT NULL,
        `exercise_goal` VARCHAR(255) NOT NULL,
        `diet_goal` VARCHAR(255) NOT NULL,
        `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
        `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    );

SET SQL_MODE = @OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;

-- ----------------- 여기서 부터 직접 작성 -------------------
DROP TABLE user, board;

CREATE TABLE
    user(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(200) NOT NULL,
        createdAt DATETIME DEFAULT NOW(),
        updatedAt DATETIME DEFAULT NOW(),
        CONSTRAINT user_id_pk PRIMARY KEY(id),
        CONSTRAINT user_email_uk UNIQUE(email)
    );

DROP TABLE board;

CREATE TABLE
    board(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        content VARCHAR(1024) NOT NULL,
        cnt INT DEFAULT 0,
        createdAt DATETIME DEFAULT NOW(),
        updatedAt DATETIME DEFAULT NOW(),
        creatorAt INT,
        CONSTRAINT board_id_pk PRIMARY key(id),
        CONSTRAINT board_creatorAt_fk FOREIGN KEY(creatorAt) REFERENCES user(id) ON UPDATE CASCADE ON DELETE
        SET NULL
    );
-- NO ACTION (에러 발생)
-- CASCADE 같이 변경
-- SET NULL Null로 변경

-- user table에 insert, update, delete, select
INSERT INTO
    user(name, email, password)
VALUES (
        '놀부',
        'nolbu@company.com',
        'abc123'
    );

INSERT INTO
    user(name, email, password)
VALUES (
        '흥부',
        'hungbu@company.com',
        'abc123'
    );

INSERT INTO
    user(name, email, password)
VALUES (
        '방자',
        'bangja@company.com',
        'abc123'
    );

UPDATE user SET name = "향단", password = 'a123' WHERE id = 3;

DELETE FROM user WHERE id = 3;

SELECT * FROM user;

-- id check
SELECT * FROM user WHERE email = 'test@test.com';

-- updatePassword: '',
UPDATE user
SET updatedAt = NOW()
WHERE
    email = 'nolbu@company.com' -- update: '',
UPDATE user
SET password = '123abc'
WHERE
    email = 'nolbu@company.com' -- delete: '',
DELETE FROM user
WHERE email = 'test@test.com' -- userList: ''

SELECT *
FROM user
ORDER BY createdAt DESC
LIMIT 0, 10 -- total
SELECT COUNT(*) as cnt
FROM user;

-- board table에 insert, update, delete, select
-- board 목록에는 항상 입력한 사용자 이름이 출력되도록..
INSERT INTO
    board(title, content, creatorAt)
VALUES ('첫번째 게시물', '첫번째 게시물 내용', 14);

INSERT INTO
    board(title, content, creatorAt)
VALUES ('두번째 게시물', '두번째 게시물 내용', 14);

INSERT INTO
    board(title, content, creatorAt)
VALUES ('세번째 게시물', '세번째 게시물 내용', 2);

UPDATE board
set
    title = '변경됨',
    content = "변경됨",
    updatedAt = NOW()
WHERE id = 3;

DELETE FROM board WHERE id = 3;

-- 전체 조회
SELECT
    b.id,
    u.name,
    title,
    DATE_FORMAT(b.createdAt, '%Y-%m-%d') as createdAt,
    cnt
FROM user u
    INNER JOIN board b ON u.id = b.creatorAt
ORDER BY b.id DESC
LIMIT 0, 10;

-- 1개 게시물 조회
SELECT
    b.id,
    u.name,
    title,
    email,
    DATE_FORMAT(b.createdAt, '%Y-%m-%d') as createdAt,
    content,
    cnt
FROM user u
    INNER JOIN board b ON u.id = b.creatorAt
WHERE b.id = 5;

-- 게시물 카운트 증가
UPDATE board SET cnt = cnt + 1 WHERE id = 5;

SELECT *
FROM board -- 조회하면 카운트를 1개 증가
UPDATE board
SET cnt = cnt + 1
WHERE id = 3;

SELECT * FROM user;