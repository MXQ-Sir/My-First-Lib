const express = require("express");
const connect = require("./myDB/connect");
const model = require("./myDB/model");
const ymRouter=require("./router/ym");
const ywRouter = require("./router/yw");
// const port = "http://192.168.10.9:3000/";
connect(function () {
    const app = express();
    app.use(express.static("./public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(ymRouter());
    app.use(ywRouter());
    app.use(function (req, res, next) {
        res.send("没有找到页面!");
    });
    app.listen(3000, function (err) {
        if (err) console.log("服务器创建失败！", err);
        else console.log("服务器创建成功！");
    });
});