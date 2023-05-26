const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const loginService = {
  getByEmail: async (userEmail, userPassword) => {
    if (!userEmail || !userPassword) {
      return { code: 400, data: { message: 'Some required fields are missing' } };
    }
    try {
      let user = await User.findOne({
        where: {
          email: userEmail,
          password: userPassword,
        },
        attributes: { exclude: ['password'] },
      });
      if (!user) {
        return { code: 400, data: { message: 'Invalid fields' } };
      }
      return { code: 200, data: user };
      // Handle the user object or perform further operations
    } catch (error) {
      // Handle the error appropriately
      console.error('Error occurred while finding the user:', error);
      return { code: 500, data: error };
    }
  },

  makeToken: (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return token;
  },
};

module.exports = loginService;