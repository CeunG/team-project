/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const userService = require('../services/user.service');

const imageUploadPath = 'http://localhost:8000/images/users/';

// 파일 업로드
const uploadName = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'public', 'images', 'users')),
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
  }),
  limits: {fileSize: 1024 * 1024 * 3},
});

// 회원 가입
router.post('/signup', uploadName.single('profile'), async (req, res, next) => {
  try {
    const data = JSON.parse(req.body.data);
    const cellphone = data.phone.one.trim() !== '' ? `${data.phone.one}-${data.phone.two}-${data.phone.three}` : '';

    const profileImageName = req.file ? `${imageUploadPath}${req.file.filename}` : `${imageUploadPath}noimage.jpg`;
    const profileImagePath = req.file ? req.file.path : '';

    const insertData = {
      ...data,
      cellphone,
      zip: data.address.postcode,
      address: data.address.main,
      addressDetail: data.address.detail,
      profileImageName, // req.file.filename,
      profileImagePath,
    };

    console.log(insertData);
    const resp = await userService.signup(insertData);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 로그인
router.post('/login', async (req, res, next) => {
  try {
    const resp = await userService.login(req.body);
    // console.log(resp);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 수정
router.put('/', async (req, res, next) => {
  // console.log(req.body.id, req.body.data);
  try {
    const resp = await userService.update(req.body.id, req.body.data);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 삭제
router.delete('/:id', async (req, res, next) => {
  try {
    const resp = await userService.delete(req.params.id);
    res.status(resp.statusCode).json(resp);
  } catch (error) {
    next(error);
  }
});

// 전체 리스트 조회
router.get('/', async (req, res, next) => {
  try {
    const resp = await userService.list(req.query);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// ID로 유저 조회
router.get('/:id', async (req, res, next) => {
  try {
    const resp = await userService.userById(req.params.id);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 사진 변경
router.post('/photo/:id', uploadName.single('profile'), async (req, res, next) => {
  try {
    const profileImageName = req.file ? `${imageUploadPath}${req.file.filename}` : `${imageUploadPath}noimage.jpg`;
    const profileImagePath = req.file ? req.file.path : '';
    const data = {profileImageName, profileImagePath, id: Number(req.body.id)};
    // console.log(data);
    const resp = await userService.photo(data);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.post('/change', async (req, res, next) => {
  try {
    const resp = await userService.change(req.body);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
