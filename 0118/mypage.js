/* eslint-disable new-cap */
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const mypageService = require("../services/mypage.service");

const imageUploadPath = "http://localhost:8000/images/mypage/";

// 파일 업로드
const uploadName = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) =>
      cb(null, path.join(__dirname, "..", "public", "images", "mypage")),
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
  }),
  limits: { fileSize: 1024 * 1024 * 3 },
});

// 프로필 저장
router.put("/profile", async (req, res, next) => {
  try {
    const { newUsername, newName, newBio } = req.body;
    const resp = await mypageService.saveProfileChanges(newUsername, newName, newBio);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 아이디 변경
router.put("/id", async (req, res, next) => {
  try {
    const { currentUsername, newUsername } = req.body;
    const resp = await mypageService.saveIdChanges(currentUsername, newUsername);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 비밀번호 변경
router.put("/password", async (req, res, next) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    const resp = await mypageService.savePasswordChanges(currentPassword, newPassword, confirmNewPassword);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 메이트 삭제
router.delete("/mate/:mateId", async (req, res, next) => {
  try {
    const mateId = req.params.mateId;
    const resp = await mypageService.saveDeletedMateList(mateId);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 목표 저장
router.put("/goal", async (req, res, next) => {
  try {
    const { weightGoal, exerciseGoal, dietGoal } = req.body;
    const resp = await mypageService.saveGoalChanges(weightGoal, exerciseGoal, dietGoal);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
