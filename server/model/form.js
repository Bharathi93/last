var mongoose=require("mongoose");

var Schema=mongoose.Schema;

var form=new Schema({
  	inputname:String,
  	inputtype:String,
  	inputparticipants:Number,
  	inputstartdate:String,
  	inputenddate:String,
  	inputlocate:String,
    actualStartDate:String,
    actualEndDate:String,
    participantsmovingout:Number
});

module.exports=mongoose.model('forms',form);
