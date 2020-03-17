const Joi = require('joi');
const {User} = require('../../model/user');

module.exports = async (req,res) => {
    //定义对象的验证规则
    const schema = {
        username:Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email:Joi.string().email().required().error(new Error('邮箱格式没有通过验证')),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('username没有通过验证')),
        role:Joi.string().valid('normal','admin').required().error(new Error('角色值非法')),
        state:Joi.number().valid(0,1).required().error(new Error('状态值非法')),
    };
    try{
        //实施验证
        await Joi.validate(req.body,schema);
    }catch (e) {
        //验证不通过
        // e.message
        //重定向会用户添加页面
        //字符串拼接办法
        return res.redirect('/admin/user-edit?message=' + e.message)
        //模板字符串方式
        // res.redirect('/admin/user-edit?message=${e.message}')
    }

    //根据邮箱地址查询用户是否存在
    let user = await User.findOne({email:req.body.email});
    //如果用户已经存在 邮箱已经被占用
    if(user){
        return res.redirect('/admin/user-edit?message=邮箱地址已经被占用')
    }

    //将用户信息添加到数据库中
    await User.create(req.body);
    //将页面重定向到用户列表页面
    res.redirect('/admin/user');
}