const mongoose = require("mongoose");
let updata={useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true};
function connect(hd){
    mongoose.connect("mongodb://127.0.0.1:27017/mySite",updata);
    mongoose.connection.on("open",function(err){
        if(err){
            console.log("数据库连接失败！",err);
        }else{
            console.log("数据库连接成功！");
            hd();};
})}

module.exports=connect;