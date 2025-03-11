let mongoose=require('mongoose');

let studentSchema=new mongoose.Schema({
       Name:String,
       Age:Number,
       School:String,
       isFamous:Boolean,
});

let studentsModel= mongoose.model('Student',studentSchema);
module.exports=studentsModel;