-- Active: 1699596440323@@127.0.0.1@3306@aja_project
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema aja_project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema aja_project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aja_project` DEFAULT CHARACTER SET utf8 ;
USE `aja_project` ;

-- -----------------------------------------------------
-- Table `aja_project`.`user`
-- -----------------------------------------------------

DROP TABLE  user

CREATE TABLE user(
  id            INT             NOT NULL    AUTO_INCREMENT    COMMENT '사용자 아이디',
  name          VARCHAR(50)     NOT NULL                      COMMENT '사용자 이름',
  email         VARCHAR(50)     NOT NULL                      COMMENT '사용자 이메일',
  password      VARCHAR(256)    NOT NULL                      COMMENT '사용자 비밀번호',
  cellphone     VARCHAR(100)    NULL                          COMMENT '사용자 휴대폰 번호',
  zip           VARCHAR(10)     NULL                          COMMENT '우편번호',
  address       VARCHAR(256)    NULL                          COMMENT '주소',
  addressDetail VARCHAR(256)    NULL                          COMMENT '상세 주소',
  profileImageName  VARCHAR(256)    NULL                      COMMENT '화면에 표시할 이미지 주소',
  profileImagePath  VARCHAR(256)    NULL                      COMMENT '이미지가 저장되는 절대패스',
  grade         VARCHAR(2)                  DEFAULT 1         COMMENT '회원 등급',
  refreshToken  VARCHAR(256)    NULL,
  createdAt     DATETIME        NOT NULL    DEFAULT CURRENT_TIMESTAMP COMMENT '생성일',
  updatedAt     DATETIME        NULL        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일',
  CONSTRAINT user_id_pk PRIMARY KEY(id),
  CONSTRAINT user_email_uk UNIQUE(email),
  CONSTRAINT user_grade_fk FOREIGN KEY(grade) REFERENCES userGrade(gradeCode)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

-- -----------------------------------------------------
-- Table `aja_project`.`calender`
-- -----------------------------------------------------

DROP TABLE  calender

CREATE TABLE calender(
  id          INT             NOT NULL    AUTO_INCREMENT    COMMENT '게시물 아이디',
  userId      INT             NOT NULL                      COMMENT '작성자 아이디',
  title       VARCHAR(1024)   NOT NULL                      COMMENT '제목',
  content     VARCHAR(1024)   NOT NULL                      COMMENT '내용',
  attachFilePath VARCHAR(256)   NULL                        COMMENT '첨부파일 경로',
  attachFileName VARCHAR(256)   NULL                        COMMENT '첨부파일 원본 파일명',
  cnt         INT                         DEFAULT 0,
  createdAt   DATETIME        NOT NULL    DEFAULT CURRENT_TIMESTAMP   COMMENT '작성일시',
  updatedAt   DATETIME        NULL        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
  CONSTRAINT calender_id_pk PRIMARY key(id),
  CONSTRAINT calender_userid_fk FOREIGN KEY(userId) REFERENCES user(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


CREATE TABLE IF NOT EXISTS calender_comment (
  id          INT             NOT NULL    AUTO_INCREMENT    COMMENT '댓글 아이디',
  calenderId     INT             NOT NULL                      COMMENT '게시물 아이디',
  userId      INT             NOT NULL                      COMMENT '작성자 아이디',
  content     VARCHAR(1024)   NOT NULL                      COMMENT '댓글 내용',
  createdAt   DATETIME        NOT NULL    DEFAULT CURRENT_TIMESTAMP   COMMENT '생성일',
  PRIMARY KEY (id),
  CONSTRAINT calendercomment_calenderId_fk FOREIGN KEY (calenderId) REFERENCES calender(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT calendercomment_userId_fk FOREIGN KEY (userId) REFERENCES user (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)

DROP TABLE userGrade;

CREATE TABLE userGrade(
  gradeCode     VARCHAR(2)      NOT NULL,
  gradeName     VARCHAR(50)     NOT NULL,
  PRIMARY KEY(gradeCode)
)


INSERT INTO userGrade(gradeCode, gradeName) VALUES(1, 'bronze');
INSERT INTO userGrade VALUES(2, 'silver');
INSERT INTO userGrade VALUES(3, 'gold');
INSERT INTO userGrade VALUES(4, 'vip');
INSERT INTO userGrade VALUES(5, 'vvip');

INSERT INTO userGrade VALUES(90, 'employee');
INSERT INTO userGrade VALUES(91, 'manager');


-- user table에 insert, update, delete, select
INSERT INTO user(name, email, password, zip, address) VALUES('이동준', 'dongjun@company.com', 'abc123', 12345, '서울');
INSERT INTO user(name, email, password, zip, address) VALUES('강윤서', 'yunseo@company.com', 'abc123', 12345, '서울');
INSERT INTO user(name, email, password, zip, address) VALUES('최은지', 'eunji@company.com', 'abc123', 12345, '서울');


UPDATE user SET name="리꼬", password='a123' WHERE id = 3;

DELETE FROM user;

SELECT * FROM user;

-- id check
SELECT * FROM user WHERE email = 'test@test.com';

-- updatePassword: '',
UPDATE user SET updatedAt = NOW() WHERE email = 'nolbu@company.com'

-- update: '',
UPDATE user SET password = '123abc' WHERE email = 'nolbu@company.com'

-- delete: '',
DELETE FROM user WHERE email = 'test@test.com'
  
-- userList: ''

SELECT * FROM user ORDER BY createdAt 
DESC LIMIT 0, 10


-- total
SELECT COUNT(*) as cnt FROM user;


-- board table에 insert, update, delete, select
-- board 목록에는 항상 입력한 사용자 이름이 출력되도록..
INSERT INTO calender(title, content, userId) VALUES('첫번째 게시물', '첫번째 게시물 내용', 4);
INSERT INTO calender(title, content, userId) VALUES('두번째 게시물', '두번째 게시물 내용', 5);
INSERT INTO calender(title, content, userId) VALUES('세번째 게시물', '세번째 게시물 내용', 6);

UPDATE calender set title = '변경됨', content="변경됨", updatedAt = NOW() WHERE id = 1;

DELETE FROM calender WHERE id = 3;

SELECT * FROM calender;


INSERT INTO calender_comment(calenderId, userId, content) VALUES(6, 4, '두번째 게시물 댓글 01');
INSERT INTO calender_comment(calenderId, userId, content) VALUES(6, 4, '두번째 게시물 댓글 02');
INSERT INTO calender_comment(calenderId, userId, content) VALUES(8, 6, '세번째 게시물 댓글 01');

SELECT * FROM calender_comment;

-- 전체 조회
SELECT c.id id, u.name name, title, DATE_FORMAT(c.createdAt, '%Y-%m-%d') as createdAt, cnt
FROM user u INNER JOIN calender c ON u.id = c.userId
ORDER BY c.id DESC
LIMIT 0, 10;

-- 1개 게시물 조회
SELECT c.id id, u.name name, title, email, DATE_FORMAT(c.createdAt, '%Y-%m-%d') as createdAt, content, cnt
FROM user u 
  INNER JOIN calender c ON u.id = c.userId
WHERE c.id = 2;

SELECT c.id, u.name, title, email, DATE_FORMAT(c.createdAt, '%Y-%m-%d') as createdAt, content, cnt
    FROM user u INNER JOIN calender c ON u.id = c.userId
    WHERE c.id = 2

-- 게시물 카운트 증가
UPDATE calender SET cnt = cnt + 1 WHERE id = 5;

SELECT * FROM calender

-- 조회하면 카운트를 1개 증가
UPDATE calender SET cnt = cnt + 1 WHERE id = 3;

SELECT * FROM user;

-- 댓글 목록 조회
SELECT cc.id id, userId, content, u.name name, u.profileImageName photo, DATE_FORMAT(cc.createdAt, '%Y-%m-%d %H:%i:%s') createdAt
FROM calender_comment cc
  LEFT JOIN user u ON cc.userId = u.id 
WHERE cc.calenderId = 2;

SELECT COUNT(*) count FROM calender_comment WHERE calenderId = 2;

-- 댓글 상세 조회
SELECT cc.id commentId, userId, content, u.name userName, DATE_FORMAT(cc.createdAt, '%Y-%m-%d %H:%i:%s') createdAt
FROM calender_comment cc
  LEFT JOIN user u ON cc.userId = u.id 
WHERE cc.id = 2;



SELECT id, name, email, cellphone, zip, address, addressDetail, profileImagePath, profileImageName, createdAt, updatedAt 
    FROM user
    ORDER BY createdAt DESC
    LIMIT 0, 5