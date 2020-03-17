const mongoose = require('mongoose');
//创建评论集合规则
const commentSchema = new mongoose.Schema({
    //文章id
    aid:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String;
    },
    //用户ID
    uid:{
        // type:mongoose.Schema.Types.ObjectId,
        type:String;
    },
    time:{
        type:Date,
    },
    content:{
        type:String;
    }
});

//创建评论集合
const Comment = mongoose.model('Comment',commentSchema);

//将评论集合作为模块成员进行导出
module.exports = {
    Comment:Comment
};