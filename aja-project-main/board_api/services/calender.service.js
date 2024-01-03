const calenderDAO = require('./../models/calenderDAO');

// Database에 쿼리를 실행하기 전 처리 작업 및 쿼리 실행후 라우터에게 전달하기 전 처리를 여기 담당
// 이러한 작업을 하는 작업을 controller라 한다. 파일명은 service를 붙임
const calenderService = {
  calenderList: async (item) => {
    // item => {no: 1, size: 10}
    const no = Number(item.no) - 1 || 0;
    const size = Number(item.size) || 10;

    try {
      const count = await calenderDAO.totalCount();
      const resp = await calenderDAO.calenderList({no, size});
      const totalPage = Math.ceil(count.cnt / size); // 81 => 81 / 10 => 8에 나머지 있으면 무조건 올림 => 9
      return {code: 201, message: 'OK', no, size, totalPage, calenders: resp};
    } catch (error) {
      throw new Error('게시물 목록 조회 실패', error);
    }
  },

  calender: async (item) => {
    try {
      const resp = await calenderDAO.calender(item);
      return {code: 201, message: 'OK', calender: resp};
    } catch (error) {
      throw new Error('게시물 조회 실패', error);
    }
  },

  update: async (item) => {
    try {
      const resp = await calenderDAO.update(item);
      return {code: 201, message: 'OK', calender: resp};
    } catch (error) {
      throw new Error('게시물 수정 실패', error);
    }
  },

  insert: async (item) => {
    try {
      const resp = await calenderDAO.insert(item);
      return {code: 201, message: 'OK', calender: resp};
    } catch (error) {
      throw new Error('게시물 입력 실패', error);
    }
  },

  delete: async (item) => {
    try {
      const resp = await calenderDAO.delete(item);
      return {code: 201, message: 'OK', calender: resp};
    } catch (error) {
      throw new Error('게시물 입력 실패', error);
    }
  },

  replyList: async (item) => {
    try {
      const resp = await calenderDAO.replyList(item);
      return {code: 201, message: 'OK', calender: resp};
    } catch (error) {
      throw new Error('게시물 입력 실패', error);
    }
  },
};
module.exports = calenderService;
