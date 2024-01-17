const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_USER_URL,
  port: process.env.DB_USER_PORT,
  user: process.env.DB_USER_USER,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_USER_DATABASE,
  connectionLimit: 10,
});
if (pool) console.log(`database connected...`);

const sql = {
  checkId: 'SELECT * FROM user WHERE email = ?',
  signup: 'INSERT INTO user(name, email, password) VALUES(?, ?, ?)',
  login: 'SELECT * FROM user WHERE email = ? AND password = ?',
  updatedAt: 'UPDATE user SET updatedAt = NOW() WHERE email = ?',
  update: 'UPDATE user SET password = ? WHERE email = ?',
  delete: 'DELETE FROM user WHERE email = ?',
  userList: 'SELECT * FROM user ORDER BY createdAt DESC LIMIT ?, ?',
  totalCount: 'SELECT COUNT(*) as cnt FROM user'
};

const userDAO = {
  checkEmail: async (item, callback) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.checkId, item.email);
      if (resp[0]) callback({ status: 500, message: '사용자가 존재합니다', data: { name: resp[0].name, email: resp[0].email } });
      else callback({ status: 200, message: 'OK' });
    } catch (error) {
      callback({ status: 500, message: '유저 입력 실패', error });
    } finally {
      if (conn !== null) conn.release(); // DB 접속 해제
    }
  },
  signup: async (item, callback) => {
    // console.log('userDAO=> ', data);
    const { name, email, password } = item;

    let conn = null;
    try {
      conn = await pool.getConnection(); // DB 접속

      // email check를 안하는 경우 일단 유저가 존재하는지 체크
      const [respCheck] = await conn.query(sql.checkId, email);
      if (respCheck[0]) {
        callback({ status: 500, message: '사용자가 존재합니다', data: { name: respCheck[0].name, email: respCheck[0].email } });
      } else {
        // 입력시 패스워드를 암호화
        const salt = await bcrypt.genSalt();
        bcrypt.hash(password, salt, async (error, hash) => {
          if (error) callback({ status: 500, message: '암호화 실패', error: error });
          else {
            const [resp] = await conn.query(sql.signup, [name, email, hash]);
            callback({ status: 200, message: 'OK', data: resp });
          }
        });
      }

    } catch (error) {
      // console.log(error);
      // Promise로 리턴된다...
      return { status: 500, message: '유저 입력 실패', error: error };
    } finally {
      if (conn !== null) conn.release(); // DB 접속 해제
    }
  },
  login: async (item, callback) => {
    // console.log('userDAO login=> ', item);
    const { email, password } = item;

    let conn = null;
    try {
      conn = await pool.getConnection();

      const [user] = await conn.query(sql.checkId, [email]);
      if (!user[0]) {
        callback({ status: 500, message: '아이디, 패스워드를 확인해주세요' });
      } else {
        bcrypt.compare(password, user[0].password, async (error, result) => {
          if (error) callback({ status: 500, message: '아이디, 패스워드를 확인해주세요', error });
          else if (result) {
            callback({ status: 200, message: 'OK', data: { name: user[0].name, email: user[0].email, id: user[0].id } });
          } else {
            callback({ status: 500, message: '아이디, 패스워드를 확인해주세요' });
          }
        })

      }

    } catch (error) {
      callback({ status: 500, message: '로그인 실패', error: error });
    } finally {
      if (conn !== null) conn.release();
    }
  },
  userList: async (item, callback) => {
    const no = Number(item.no) - 1 || 0;
    const size = Number(item.size) || 10;

    let conn = null;
    try {
      conn = await pool.getConnection();
      const [data] = await conn.query(sql.userList, [no * size, size]);
      const [total] = await conn.query(sql.totalCount);
      // console.log(total)
      callback({ status: 200, message: 'OK', pageno: no + 1, pagesize: size, total: total[0].cnt, data });
    } catch (error) {
      callback({ status: 500, message: '유저 목록 조회 실패', error: error });
    } finally {
      if (conn !== null) conn.release();
    }
  },
  update: async (item, callback) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();

      const salt = await bcrypt.genSalt();
      bcrypt.hash(item.password, salt, async (error, hash) => {
        if (error) callback({ status: 500, message: '암호화 실패', error: error });
        else {
          const [resp] = await conn.query(sql.update, [hash, item.email]);
          await pool.query(sql.updatedAt, [item.email]);
          conn.commit();    // 위의 모든 업데이트를 반영

          callback({ status: 200, message: 'OK', data: resp });
        }
      });
    } catch (error) {
      conn.rollback();  // 이전 commit 상태로 되돌린다
      callback({ status: 500, message: '업데이트 실패', error: error });
    } finally {
      if (conn !== null) conn.release();
    }
  },
  delete: async (item, callback) => {
    // console.log(item)
    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();

      const [resp] = await pool.query(sql.delete, [item.email]);
      conn.commit();    // 위의 모든 업데이트를 반영

      callback({ status: 200, message: 'OK', data: resp });
    } catch (error) {
      conn.rollback();  // 이전 commit 상태로 되돌린다
      callback({ status: 500, message: '유저 삭제 실패', error: error });
    } finally {
      if (conn !== null) conn.release();
    }
  },
  temp: async (item) => {
    let conn = null;
    try {
      conn = await pool.getConnection();

      return { status: 200, message: 'OK' };
    } catch (error) {
      return { status: 500, message: '로그인 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  },
};

module.exports = userDAO;
