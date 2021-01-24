const express = require("express");
const {resolve}=require("path");
const router = new express.Router();
router.get("/",function(req,res){
    res.sendFile(resolve(__dirname,"../public/index.html"));
});

module.exports=function(){
        return router;
}