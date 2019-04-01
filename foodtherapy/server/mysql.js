var mysql = require("mysql");
var config = require("./config.js");

var client = mysql.createConnection(config.sqlObj);

module.exports = function (sql, params,callback) {
    client.query(sql,params,function (error, result) {
        if (error) {
            console.log("连接发生错误");
            return;
        }
        callback(result);
    })
}