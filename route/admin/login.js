//导入用户集合构造函数
const {User} = require('../../model/user');

module.exports = async(req,res) => {
    //接受请求参数
    // res.send(req.body);
    //解构
    const{email,password} = req.body;
    //二次检验
    if (email.trim().length == 0 || password.trim().length == 0){
        // return res.status(400).send('<h4>邮件地址或密码错误</h4>')
        return res.status(400).render('admin/error',{msg:'邮件地址或密码错误'});
    }
    //通过异步函数获取返回值
    let user = await User.findOne({email});
    if (user){
        req.session.username = user.username;
        // res.send('登陆成功');
        req.app.locals.userInfo = user;
        //重定向到用户列表页面
        res.redirect('/admin/user')
    }else {
        res.status(400).render('admin/error',{msg:'邮箱或者密码错误'})
    }
}
