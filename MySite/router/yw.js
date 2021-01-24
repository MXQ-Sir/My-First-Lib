const express = require("express");
const mongoose = require("mongoose");
const model = require("../myDB/model");
const port = "http://192.168.10.9:3000/";
let router =new express.Router();

router.post("/take",function(req,res){
    // let {name,content}= req.body;
    model.create(req.body,function(err){
        if(err){
            console.log("数据库添加失败！"),err;
            res.redirect(port);
        }else{
            res.redirect(port);
        }
    })
});

router.get("/take",function(req,res){
    model.find({},function(err,data){
        if(data){
            console.log(data);
            res.send(`${JSON.stringify(data)}`);
        }
    });
});

module.exports=function(){
    return router;
}