-- Active: 1699596440323@@127.0.0.1@3306@skeleton
-- MySQL Workbench Forward Engineering


DROP TABLE userGrade, user, board, board_comment;

CREATE TABLE userGrade(
  gradeCode     VARCHAR(2)      NOT NULL,
  gradeName     VARCHAR(50)     NOT NULL,
  PRIMARY KEY(gradeCode)
)

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


CREATE TABLE board(
  id          INT             NOT NULL    AUTO_INCREMENT    COMMENT '게시물 아이디',
  userId      INT             NOT NULL                      COMMENT '작성자 아이디',
  title       VARCHAR(1024)   NOT NULL                      COMMENT '제목',
  content     VARCHAR(1024)   NOT NULL                      COMMENT '내용',
  attachFilePath VARCHAR(256)   NULL                        COMMENT '첨부파일 경로',
  attachFileName VARCHAR(256)   NULL                        COMMENT '첨부파일 원본 파일명',
  cnt         INT                         DEFAULT 0,
  createdAt   DATETIME        NOT NULL    DEFAULT CURRENT_TIMESTAMP   COMMENT '작성일시',
  updatedAt   DATETIME        NULL        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일시',
  CONSTRAINT board_id_pk PRIMARY key(id),
  CONSTRAINT board_userid_fk FOREIGN KEY(userId) REFERENCES user(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
-- NO ACTION (에러 발생)
-- CASCADE 같이 변경
-- SET NULL Null로 변경

CREATE TABLE IF NOT EXISTS board_comment (
  id          INT             NOT NULL    AUTO_INCREMENT    COMMENT '댓글 아이디',
  boardId     INT             NOT NULL                      COMMENT '게시물 아이디',
  userId      INT             NOT NULL                      COMMENT '작성자 아이디',
  content     VARCHAR(1024)   NOT NULL                      COMMENT '댓글 내용',
  createdAt   DATETIME        NOT NULL    DEFAULT CURRENT_TIMESTAMP   COMMENT '생성일',
  PRIMARY KEY (id),
  CONSTRAINT boardcomment_boardId_fk FOREIGN KEY (boardId) REFERENCES board(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT boardcomment_userId_fk FOREIGN KEY (userId) REFERENCES user (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)

INSERT INTO userGrade(gradeCode, gradeName) VALUES(1, 'bronze');
INSERT INTO userGrade VALUES(2, 'silver');
INSERT INTO userGrade VALUES(3, 'gold');
INSERT INTO userGrade VALUES(4, 'vip');
INSERT INTO userGrade VALUES(5, 'vvip');

INSERT INTO userGrade VALUES(90, 'employee');
INSERT INTO userGrade VALUES(91, 'manager');


-- user table에 insert, update, delete, select
INSERT INTO user(name, email, password, zip, address) VALUES('놀부', 'nolbu@company.com', 'abc123', 12345, '서울');
INSERT INTO user(name, email, password, zip, address) VALUES('흥부', 'hungbu@company.com', 'abc123', 12345, '서울');
INSERT INTO user(name, email, password, zip, address) VALUES('방자', 'bangja@company.com', 'abc123', 12345, '서울');


UPDATE user SET name="향단", password='a123' WHERE id = 3;

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
INSERT INTO board(title, content, userId) VALUES('첫번째 게시물', '첫번째 게시물 내용', 4);
INSERT INTO board(title, content, userId) VALUES('두번째 게시물', '두번째 게시물 내용', 5);
INSERT INTO board(title, content, userId) VALUES('세번째 게시물', '세번째 게시물 내용', 6);

UPDATE board set title = '변경됨', content="변경됨", updatedAt = NOW() WHERE id = 1;

DELETE FROM board WHERE id = 3;

SELECT * FROM board;


INSERT INTO board_comment(boardId, userId, content) VALUES(6, 4, '두번째 게시물 댓글 01');
INSERT INTO board_comment(boardId, userId, content) VALUES(6, 4, '두번째 게시물 댓글 02');
INSERT INTO board_comment(boardId, userId, content) VALUES(8, 6, '세번째 게시물 댓글 01');

SELECT * FROM board_comment;

-- 전체 조회
SELECT b.id id, u.name name, title, DATE_FORMAT(b.createdAt, '%Y-%m-%d') as createdAt, cnt
FROM user u INNER JOIN board b ON u.id = b.userId
ORDER BY b.id DESC
LIMIT 0, 10;

-- 1개 게시물 조회
SELECT b.id id, u.name name, title, email, DATE_FORMAT(b.createdAt, '%Y-%m-%d') as createdAt, content, cnt
FROM user u 
  INNER JOIN board b ON u.id = b.userId
WHERE b.id = 2;

SELECT b.id, u.name, title, email, DATE_FORMAT(b.createdAt, '%Y-%m-%d') as createdAt, content, cnt
    FROM user u INNER JOIN board b ON u.id = b.userId
    WHERE b.id = 2

-- 게시물 카운트 증가
UPDATE board SET cnt = cnt + 1 WHERE id = 5;

SELECT * FROM board

-- 조회하면 카운트를 1개 증가
UPDATE board SET cnt = cnt + 1 WHERE id = 3;

SELECT * FROM user;

-- 댓글 목록 조회
SELECT bc.id id, userId, content, u.name name, u.profileImageName photo, DATE_FORMAT(bc.createdAt, '%Y-%m-%d %H:%i:%s') createdAt
FROM board_comment bc
  LEFT JOIN user u ON bc.userId = u.id 
WHERE bc.boardId = 2;

SELECT COUNT(*) count FROM board_comment WHERE boardId = 2;

-- 댓글 상세 조회
SELECT bc.id commentId, userId, content, u.name userName, DATE_FORMAT(bc.createdAt, '%Y-%m-%d %H:%i:%s') createdAt
FROM board_comment bc
  LEFT JOIN user u ON bc.userId = u.id 
WHERE bc.id = 2;



SELECT id, name, email, cellphone, zip, address, addressDetail, profileImagePath, profileImageName, createdAt, updatedAt 
    FROM user
    ORDER BY createdAt DESC
    LIMIT 0, 5