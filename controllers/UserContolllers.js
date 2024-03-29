const User = require('../models/User');
module.exports = {
    async store(req, res){
        const user = await User.create(req.body); 
        return res.json(user);
    },
    async list(req, res){
        const user = await user.findOne({email: req.params.email});
        return res.json(user);
    }
};