const jwt = require('jsonwebtoken');
const {accessTokenKey, refreshTokenKey} = require('./../config/jwt.config');

const authService = {
  createToken: async (value) => {
    const result = {
      accessToken: jwt.sign(value, accessTokenKey.secretKey, accessTokenKey.options),
      refreshToken: jwt.sign({}, refreshTokenKey.secretKey, accessTokenKey.options),
    };

    return result;
  },
};

module.exports = authService;
