const bcrypt = require('bcrypt');
const userDAO = require('./../models/userDAO');
// const authService = require('./auth.service');

const userService = {
  // 회원 가입
  async signup(item) {
    const {email, password} = item;

    try {
      const user = await userDAO.user({email});
      if (user) {
        // throw Object.assign({}, {error: new Error('등록된 이메일입니다'), status: 409, message: `등록된 이메일입니다`});
        return {code: 409, message: `등록된 이메일입니다`};
      } else {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const newUser = {...item, password: hash};
        // console.log(newUser);
        const insertId = await userDAO.signup(newUser);
        return {code: 201, message: `사용자 등록에 성공하였습니다`, userId: insertId};
      }
    } catch (error) {
      throw new Error('회원 가입 실패', error);
    }
  },

  // 로그인
  login: async (item) => {
    const {email, password} = item;
    try {
      const user = await userDAO.user({email});
      if (!user) {
        // 401은 토큰 인증 오류에 사용하므로 로그인 실패는 403(권한없음)으로 사용
        return {code: 403, message: `아이디, 패스워드를 확인하세요`};
      } else {
        const compare = await bcrypt.compare(password, user.password);
        // console.log('login', compare);
        if (compare) {
          /*
          // JWT => 여기서는 구현 안함 (저도 하다가 중단)
          const token = await jwt.sign(user.id, 'secretKey', {algorithm: 'HS256'});
          const refreshToken = await jwt.sign({}, 'secretKey', {algorithm: 'HS256'});
          */
          // const token = await authService.createToken({id: user.id});
          // await userDAO.update(user.id, {refreshToken: token.refreshToken});
          // return {code: 201, message: `로그인에 성공하였습니다`, user: {...user, token}};
          return {code: 201, message: `로그인에 성공하였습니다`, user: user};
        } else {
          return {code: 500, message: `아이디 패스워드를 확인해 주세요.`};
        }
      }
    } catch (error) {
      throw new Error('아이디, 패스워드를 확인하세요', {
        code: 403,
        message: `아이디, 패스워드를 확인하세요`,
        error,
      });
    }
  },

  // 회원 정보 수정
  update: async (id, item) => {
    console.log(item);
    try {
      // if (item.email) {
      //   const user = await userDAO.user({email: item.email});
      //   if (user) return {statusCode: 409, message: `등록된 이메일입니다`};
      // }
      // if (item.password) {
      //   const salt = await bcrypt.genSalt();
      //   const hash = await bcrypt.hash(item.password, salt);
      //   item.password = hash;
      // }
      const resp = await userDAO.update(id, item);
      return {code: 201, message: `회원정보 수정에 성공하였습니다`, user: resp};
    } catch (error) {
      throw new Error('회원정보 수정에 실패했습니다.');
    }
  },

  // 회원 정보 삭제. 제약조건에 따라 에러 발생할 수 있음 => NO ACTION
  delete: async (id) => {
    try {
      const resp = await userDAO.delete(id);
      return {code: 201, message: `회원정보 삭제에 성공하였습니다`, user: resp};
    } catch (error) {
      throw new Error('회원정보 삭제에 실패했습니다.');
    }
  },

  // 회원 목록
  list: async (item) => {
    const {no = 1, size = 5} = item;
    try {
      const list = await userDAO.list(no, size);
      return {code: 201, message: `회원정보 목록 조회에 성공하였습니다`, list};
    } catch (error) {
      throw new Error('회원정보 목록 조회에 실패했습니다.');
    }
  },

  // 회원 상세 조회
  userById: async (id) => {
    try {
      const user = await userDAO.userById(id);
      return {code: 201, message: `회원정보 조회에 성공하였습니다`, user: user[0]};
    } catch (error) {
      throw new Error('회원정보 조회에 실패했습니다.');
    }
  },

  photo: async (item) => {
    try {
      const user = await userDAO.photo(item);
      return {code: 201, message: `회원 이미지 변경에 성공하였습니다`, user};
    } catch (error) {
      throw new Error('회원 이미지 변경에 실패했습니다.');
    }
  },

  change: async (item) => {
    try {
      const user = await userDAO.user({id: item.id});
      const compare = await bcrypt.compare(item.current, user.password);
      if (compare) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(item.password, salt);

        const resp = await userDAO.change(hash, item.id);
        return {code: 200, message: `패스워드 변경에 성공하였습니다`, user: resp};
      } else {
        return {code: 500, message: `기존 패스워드를 확인해 주세요`};
      }
    } catch (error) {
      throw new Error('회원 비밀번호 변경에 실패했습니다.');
    }
  },
};
module.exports = userService;
