const bcrypt = require("bcrypt");
const mypageDAO = require("../models/mypageDAO");

const mypageService = {
  saveProfileChanges: async (newUsername, newName, newBio, userId) => {
    try {
      await mypageDAO.saveProfileChanges(newUsername, newName, newBio, userId);
      return { code: 201, message: "프로필이 성공적으로 업데이트되었습니다." };
    } catch (error) {
      throw new Error("프로필 업데이트에 실패했습니다.", error);
    }
  },

  saveIdChanges: async (currentUsername, newUsername) => {
    try {
      await mypageDAO.saveIdChanges(currentUsername, newUsername);
      return { code: 201, message: "아이디가 성공적으로 변경되었습니다." };
    } catch (error) {
      throw new Error("아이디 변경에 실패했습니다.", error);
    }
  },

  savePasswordChanges: async (currentPassword, newPassword, userId) => {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await mypageDAO.savePasswordChanges(hashedPassword, userId);
      return { code: 201, message: "비밀번호가 성공적으로 변경되었습니다." };
    } catch (error) {
      throw new Error("비밀번호 변경에 실패했습니다.", error);
    }
  },

  saveDeletedMateList: async (mateId) => {
    try {
      await mypageDAO.saveDeletedMateList(mateId);
      return { code: 201, message: "메이트가 성공적으로 삭제되었습니다." };
    } catch (error) {
      throw new Error("메이트 삭제에 실패했습니다.", error);
    }
  },

  saveGoalChanges: async (weightGoal, exerciseGoal, dietGoal, userId) => {
    try {
      await mypageDAO.saveGoalChanges(weightGoal, exerciseGoal, dietGoal, userId);
      return { code: 201, message: "목표가 성공적으로 업데이트되었습니다." };
    } catch (error) {
      throw new Error("목표 업데이트에 실패했습니다.", error);
    }
  },
};

module.exports = mypageService;
