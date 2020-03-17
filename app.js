//入口文件
const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');
const session = require('express-session');
const app = express();
//数据库连接
require('./model/connect');
// require('./model/user');
//处理post请求参数
app.use(bodyPaser.urlencoded({extend:false}));
//配置session
app.use(session({secret:'secret key'}))

//告诉框架模板的引擎是什么
app.engine('art',require('express-art-template'));
//告诉express框架模板所在位置
app.set('views',path.join(__dirname,'views'));
//告诉框架模板的默认后缀是什么
app.set('view engine','art');

//开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));

//引入路由模块
const home = require('./route/home.js');
const admin = require('./route/admin.js');

//拦截请求 判断用户登录状态
app.use('/admin',require('./middleware/loginGuard'));

//为路由匹配请求路径
app.use('/home',home);
app.use('/admin',admin);

//监听端口
app.listen(80);
console.log('网站服务器启动成功');