/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const calenderService = require('./../services/calender.service');

router.get('/', async (req, res, next) => {
  try {
    const resp = await calenderService.calenderList(req.query);
    // console.log(resp);
    return res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const resp = await calenderService.calender(req.params);
    return res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const resp = await calenderService.update(req.body);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const resp = await calenderService.insert(req.body);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const resp = await calenderService.delete(req.params);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

// 리플 목록 조회
router.get('/reply/:id', async (req, res, next) => {
  try {
    const resp = await calenderService.replyList(req.params);
    console.log(resp);
    res.json(resp);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
