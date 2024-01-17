/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const userDAO = require('./../models/userDAO');

/*
  브라우저로 온 요청을 받아 처리하는 파일 => 라우터
  DB 관련 처리는 받은 데이터를 userDAO에 넘겨 처리 결과를 리턴받아 JSON으로 브라우저에 출력한다
  브라우저 요청(데이터?) => 라우터 => DAO => 라우터 => 브라우저 결과 출력
*/
router.get('/userList', (req, res, next) => {
  const query = req.query;  // { no: 1, size: 10 }

  userDAO.userList(query, (resp) => {
    res.json(resp);
  })
});

router.put('/update', (req, res, next) => {
  const body = req.body;
  // console.log(body)
  userDAO.update(body, (resp) => {
    res.json(resp);
  });
});

router.delete('/delete/:email', (req, res, next) => {
  // http://localhost:8000/users/delete?email=abc@abc.com => ejs, react
  // http://localhost:8000/users/delete/abc@abc.com => react
  const params = req.params;
  // console.log(params)
  userDAO.delete(params, (resp) => {
    res.json(resp);
  });
});

router.post('/checkEmail', (req, res, next) => {
  const body = req.body;
  userDAO.checkEmail(body, (resp) => {
    res.json(resp);
  })
});

router.post('/signup', async (req, res, next) => {
  const data = req.body;

  userDAO.signup(data, (resp) => {
    res.json(resp);
  });

});

router.post('/login', (req, res, next) => {
  const body = req.body;
  // console.log(body);
  userDAO.login(body, (resp) => {
    res.json(resp);
  })
});

router.get('/logout', function (req, res, next) {
  res.send('로그아웃');
});

module.exports = router;
