const express = require('express');
const home = express.Router();

home.get('/',(req,res) => {
    res.send('博客首页')
});

module.exports = home;