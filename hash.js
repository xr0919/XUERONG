const bcrypt = require('bcrypt');

async function run() {
//genSalt()方法接受一个数字作为参数
// 数字越大 生成的随机字符串复杂度越高
//返回生成的随机字符串
    const salt = await bcrypt.genSalt(10);
    //对密码进行加密
    //1.要求加密的明文2.随机字符串 返回加密后的密码
    const result = await bcrypt.hash('123456',salt);
    console.log(salt);
    console.log(result);
}
run();