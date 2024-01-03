const pool = require('./pool');

const sql = {
  calenderList: `SELECT c.id id, u.name name, title, DATE_FORMAT(c.createdAt, '%Y-%m-%d') as createdAt, cnt
    FROM user u INNER JOIN calender c ON u.id = c.userId
    ORDER BY c.id DESC
    LIMIT ?, ?`,
    calender: `SELECT c.id id, u.name name, title, email, DATE_FORMAT(c.createdAt, '%Y-%m-%d') as createdAt, content, cnt
    FROM user u INNER JOIN calender c ON u.id = c.userId
    WHERE c.id = ?`,
  insert: 'INSERT INTO calender(title, content, userId) VALUES(?, ?, ?)',
  update: 'UPDATE calender set title = ?, content = ?, updatedAt = NOW() WHERE id = ?',
  delete: 'DELETE FROM calender WHERE id = ?',
  incCount: 'UPDATE calender SET cnt = cnt + 1 WHERE id = ?',
  totalCount: 'SELECT COUNT(*) as cnt FROM calender',
  replyList: `SELECT cc.id id, userId, content, u.name name, u.profileImagePath photo, DATE_FORMAT(cc.createdAt, '%Y-%m-%d %H:%i:%s') createdAt
    FROM calender_comment cc
    LEFT JOIN user u ON cc.userId = u.id 
    WHERE cc.calenderId = ?`,
};

const calenderDAO = {
  totalCount: async () => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.totalCount);
      return resp[0];
    } catch (error) {
      throw new Error('전체 게시물 카운트 조회 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },
  calenderList: async (item) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.calenderList, [item.no, item.size]);
      return resp;
    } catch (error) {
      throw new Error('전체 게시물 조회 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },
  calender: async (item) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      conn.beginTransaction();

      const [resp] = await conn.query(sql.calender, [item.id]);
      await conn.query(sql.incCount, [item.id]);
      conn.commit();
      return resp[0];
    } catch (error) {
      conn.rollback();
      throw new Error('게시물 조회 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },
  update: async (item) => {
    // console.log(item);
    let conn = null;
    try {
      conn = await pool.getConnection();
      conn.beginTransaction();

      const [resp] = await conn.query(sql.update, [item.title, item.content, item.id]);
      conn.commit();
      // callback({status: 200, message: 'OK', data: resp});
      return resp;
    } catch (error) {
      conn.rollback();
      // callback({status: 500, message: '로그인 실패', error: error});
      throw new Error('게시물 수정 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },
  insert: async (item) => {
    // console.log(item);
    let conn = null;
    try {
      conn = await pool.getConnection();
      conn.beginTransaction();

      const [resp] = await conn.query(sql.insert, [item.title, item.content, item.creatorAt]);
      conn.commit();
      // callback({status: 200, message: 'OK', data: resp});
      return resp;
    } catch (error) {
      conn.rollback();
      // callback({status: 500, message: '게시물 입력 실패', error: error});
      throw new Error('게시물 추가 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },

  delete: async (item) => {
    console.log(item);
    let conn = null;
    try {
      conn = await pool.getConnection();
      conn.beginTransaction();

      const [resp] = await conn.query(sql.delete, [Number(item.id)]);
      conn.commit();

      // callback({status: 200, message: 'OK', data: resp});
      return resp;
    } catch (error) {
      conn.rollback();
      // callback({status: 500, message: '게시물 삭제 실패', error: error});
      throw new Error('게시물 추가 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },

  replyList: async (item) => {
    console.log(item);
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.replyList, [Number(item.id)]);
      return resp;
    } catch (error) {
      throw new Error('게시물 리플목록 조회 실패', error);
    } finally {
      if (conn !== null) conn.release();
    }
  },
};
module.exports = calenderDAO;
