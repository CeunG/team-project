module.exports = {
  accessTokenKey: {
    secretKey: 'skeletonCalenderProjectSecretKey',
    options: {
      algorithm: 'HS256', // 대칭키 방식
      // expiresIn: '2h',  // 2시간
      expiresIn: '10m', // 10분
      // expiresIn: '10s',  // 10초
      issuer: 'Multicampus', // 발행자
    },
  },
  refreshTokenKey: {
    secretKey: 'skeletonCalenderProjectSecretKey',
    options: {
      algorithm: 'HS256',
      expiresIn: '30d',
      // expiresIn: '30s',
      issuer: 'Multicampus',
    },
  },
};
