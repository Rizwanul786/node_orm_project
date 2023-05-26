const loginService = require('../services/loginService');

const loginController = {
  getToken: async (req, res) => {
    const { email, password,name } = req.body;
    const { code, data } = await loginService.getByEmail(email, password);
    if (code === 200) {
      const token = loginService.makeToken(data.dataValues);
      return res.status(code).json({ token,name,email });
    }

    return res.status(code).json(data);
  },
};

module.exports = loginController;