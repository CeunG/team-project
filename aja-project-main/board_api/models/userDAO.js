const pool = require('./pool');

const sql = {
  user: 'SELECT * FROM user WHERE ?',
  signup: `INSERT INTO 
    user(name, email, password, cellphone, zip, address, addressDetail, profileImagePath, profileImageName)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  login: 'SELECT * FROM user WHERE ?',
  update: 'UPDATE user SET ? WHERE id = ?',
  delete: 'DELETE FROM user WHERE id = ?',
  totalCount: 'SELECT COUNT(*) as cnt FROM user',
  userList: `SELECT id, name, email, cellphone, zip, address, addressDetail, profileImagePath, profileImageName, createdAt, updatedAt 
    FROM user
    ORDER BY createdAt DESC
    LIMIT ?, ?`,
  userById: `SELECT id, name, email, cellphone, zip, address, addressDetail, profileImagePath, profileImageName, createdAt, updatedAt 
    FROM user WHERE id = ?`,
  photo: `UPDATE user SET profileImageName = ?, profileImagePath = ? WHERE id = ?`,
  change: `UPDATE user SET password = ? WHERE id = ?`,
};

const userDAO = {
  // 지정한 속성으로 유저 조회
  user: async (attr) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.user, [attr]);
      return resp[0];
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },
  // 회원 가입
  signup: async (user) => {
    const {name, email, password, cellphone, zip, address, addressDetail, profileImageName, profileImagePath} = user;

    let conn = null;
    try {
      conn = await pool.getConnection();
      conn.beginTransaction();
      const [resp] = await conn.query(sql.signup, [
        name,
        email,
        password,
        cellphone,
        zip,
        address,
        addressDetail,
        profileImageName,
        profileImagePath,
      ]);
      conn.commit();
      return resp.insertId;
    } catch (error) {
      conn.rollback();
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },

  // 회원 수정
  update: async (id, user) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.update, [user, id]);
      return resp.affectedRows;
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },

  // 회원 삭제
  delete: async (id) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.delete, [Number(id)]);
      return resp;
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },

  // 회원 리스트
  list: async (no, size) => {
    let conn = null;
    // console.log(no, size);
    try {
      conn = await pool.getConnection();
      const [count] = await conn.query(sql.totalCount, []);
      const [resp] = await conn.query(sql.userList, [Number(no) - 1, Number(size)]);
      return {no: no, size, total: count[0].cnt, users: resp};
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },

  // id로 회원 참조
  userById: async (no) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.userById, [no]);
      return resp;
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },

  // photo update
  photo: async (item) => {
    const {profileImagePath, profileImageName, id} = item;
    console.log(item);
    let conn = null;
    try {
      conn = await pool.getConnection();
      const resp = await conn.query(sql.photo, [profileImagePath, profileImageName, id]);
      console.log(resp);
      return resp;
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },

  change: async (hash, id) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.change, [hash, id]);
      return resp;
    } catch (error) {
      throw new Error('Database error');
    } finally {
      if (conn) conn.release();
    }
  },
};

module.exports = userDAO;
