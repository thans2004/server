// import mongoose from "mongoose";

const mongoose =require('mongoose');

const todoSchema = new mongoose.Schema({
    
    title:String,

    describtion:{
        type:String
    },
    isDone:{
        type:Boolean,
        default:false
    }
    },{
        timestamps:true
    });

module.exports = mongoose.model('Todo',todoSchema,'todos');
