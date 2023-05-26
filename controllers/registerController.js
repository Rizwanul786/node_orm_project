const registerService = require('../services/registerService');

const registerController = {
  getToken: async (req, res) => {
    const { name,email, password } = req.body;
    const { code, data } = await registerService.createUser(name,email,password);
    try{
        return res.status(code).json(data);
    }catch(ex){
        return res.send(ex)
    }
  },
};

module.exports = registerController;