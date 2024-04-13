
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    area :{
        type : String,
        required : true
    },
    coach :{
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    }
})


module.exports = mongoose.model("user_data", userSchema);



