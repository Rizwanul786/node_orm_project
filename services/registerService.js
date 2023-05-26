const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const registerService = {
    createUser: async (name, userEmail, userPassword) => {
    if (!name || !userEmail || !userPassword) {
      return { code: 400, data: { message: 'Some required fields are missing' } };
    }
    const user = await User.findOne({
      where: {
        email: userEmail,
        password: userPassword,
      },
      attributes: { exclude: ['password'] },
    });

    if (user) {
      return { code: 400, data: { message: 'User already exist' } };
    }
    // Create a new user
    const newUser = await User.create({ name: name,email:userEmail,password:userPassword });
    return { code: 200, data: newUser.toJSON() };
  }
};

module.exports = registerService;