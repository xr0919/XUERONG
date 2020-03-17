const {User} = require('../../model/user');

module.exports = async (req,res) => {
    let users = await User.find({})
    // res.send(users);
    res.render('admin/user',{
        // msg:req.session.username
        users:users
    });
}