var express = require("express");
var router = express.Router();
var url = require("url");
var shopcar = require("./data/shopcar/index.js");
var SimpleTestData = require("./data/mine/SimpleTest");
var chrnicData = require("./data/mine/chronicData");
var ProfessionalTest = require("./data/mine/ProfessionalTest");
var shiliao = require("./data/Shiliao/shiliao.js");
var kangzhoudata = require("./data/Shiliao/kangzhou.js");
var siren = require("./data/siren/siren.js");
var indexImg = require("./data/Index/home.js");
var mysqlFn = require("./mysql.js");
var config = require("./config.js");
urlObj = config.urlObj;

router.all(urlObj.login, function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next() // pass control to the next handler
  })
// 查询用户列表
router.get(urlObj.userList, function (req, res) {

    // 创建查询语句
    var sql = "select * from user";
    mysqlFn(sql, null, function (data) {
        res.send(data);
    })
})

// 登陆
router.post(urlObj.login, function (req, res) {
    // 用户名和密码
    var username = req.body.username;
    var password = req.body.password;

    var sql = "SELECT * FROM user WHERE `username`=? AND `password`=?"
 

    var params = [username, password];
    mysqlFn(sql, params, function (data) {
        
        if (data.length > 0) {
            res.send(data);
        } else {
           
            res.send({
                msg: "用户名密码错误"
            })
        }
    })
});


// 注册
router.post(urlObj.register, function (req, res) {
    var re_username = req.body.username;
    var re_password = req.body.password;
    var sql = "insert into user values(?,?)";
    var params = [re_username, re_password];
    mysqlFn(sql, params, function (data) {
        // 判断是否成功
        if (data.affectedRows > 0) {
            res.send({
                msg: "注册成功"
            })
        } else {
            res.send({
                msg: "注册失败"
            })
        }
    })

});

// 接口
router.get("/index",function(req,res){
    // 接受一个参数
    res.set("Access-Control-Allow-Origin", "*");
    res.send(indexImg);
})
// 食疗方：订单
router.get("/shiliao",function(req,res){
    // 接受一个参数
    res.set("Access-Control-Allow-Origin", "*");
    res.send(shiliao);
})
// 私人：症状调理
router.get("/siren",function(req,res){
    // 接受一个参数
    res.set("Access-Control-Allow-Origin", "*");
    res.send(siren);
})
router.get("/shopcar",function(req,res){
    // 接受一个参数
    res.set("Access-Control-Allow-Origin", "*");
    res.send(shopcar);
})

// 简易版测试数据
router.get("/simpletestdata",function(req,res){
    res.set("Access-Control-Allow-Origin", "*");
    res.send(SimpleTestData);
})

//专业测试数据
router.get("/professionaltest",function(req,res){
    res.set("Access-Control-Allow-Origin", "*");
    res.send(ProfessionalTest);
})
//选择性慢性病
router.get("/chronic",function(req,res){
    res.set("Access-Control-Allow-Origin", "*");
    res.send(chrnicData);
})

//抗皱接口
router.get("/kangzhou",function(req,res){
    res.set("Access-Control-Allow-Origin", "*");
    res.send(kangzhoudata);
})
module.exports = router;
