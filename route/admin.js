const express = require('express');
const admin = express.Router();

//渲染登录页面
admin.get('/login',require('./admin/loginPage'));

// admin.get('/user',(req,res) => {
//     res.render('admin/user')
// });

//实现登录功能
admin.post('/login',require('./admin/login'));

//创建用户列表路由 渲染用户列表页面
admin.get('/user',require('./admin/userPage'));

//创建用户编辑页面路由
admin.get('/user-edit',require('./admin/user-edit'));

//创建实现用户添加功能路由
admin.post('/user-edit',require('./admin/user-edit-fn'));

//删除用户功能路由
admin.get('/delete',require('./admin/user-delete'))

//将路由对象作为模块成员进行导出
module.exports = admin;