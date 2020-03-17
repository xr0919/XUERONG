//创建用户集合
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//创建用户集合规则
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        //保证邮箱地址不重复
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    //admin超级管理员
    //normal普通用户
    role:{
        type:String,
        required:true,
    },
    state:{
        type:Number,
        //0启用状态;1禁用状态
        default:0
    }
});

//创建集合
const User = mongoose.model('User',userSchema);

// async function createUser(){
//     const salt = await bcrypt.genSalt(10);
//     const result = await bcrypt.hash('123456',salt);
//     const user = await User.create({
//         username: 'XR',
//         email: '544050376@qq.com',
//         password: pass,
//         role:'admin',
//         state:0
//     })
// }
// createUser();


// User.create({
//     username: 'XR',
//     email: '544050376@qq.com',
//     password: 'xr22454052',
//     role:'admin',
//     state:0
// }).then(() => {
//     console.log('用户创建成功')
// }).catch(() => {
//     console.log('用户创建失败')
// })

//将用户集合作为模块成员进行导出
module.exports = {
    User
};