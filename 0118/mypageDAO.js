const pool = require("../config/database");

const mypageDAO = {
  // 프로필 저장
  saveProfileChanges: async (newUsername, newName, newBio) => {
    const query = "UPDATE users SET username = ?, name = ?, bio = ? WHERE id = ?";
    const values = [newUsername, newName, newBio, userId]; // userId는 현재 로그인한 사용자의 ID

    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  // 아이디 변경
  saveIdChanges: async (currentUsername, newUsername) => {
    const query = "UPDATE users SET username = ? WHERE username = ?";
    const values = [newUsername, currentUsername];

    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  // 비밀번호 변경
  savePasswordChanges: async (currentPassword, newPassword, userId) => {
    const query = "UPDATE users SET password = ? WHERE id = ?";
    const values = [newPassword, userId]; // userId는 현재 로그인한 사용자의 ID

    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  // 메이트 삭제
  saveDeletedMateList: async (mateId) => {
    const query = "DELETE FROM mate_list WHERE id = ?";
    const values = [mateId];

    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  // 목표 저장
  saveGoalChanges: async (weightGoal, exerciseGoal, dietGoal, userId) => {
    const query = "UPDATE goals SET weight_goal = ?, exercise_goal = ?, diet_goal = ? WHERE user_id = ?";
    const values = [weightGoal, exerciseGoal, dietGoal, userId];

    return new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = mypageDAO;
