const mongoose = require("mongoose");
let schema= mongoose.Schema({
    content:{type:String},
    name:{type:String},
});

let model = mongoose.model("takes",schema);
module.exports=model;