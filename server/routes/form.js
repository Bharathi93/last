var express = require('express');
var route = express.Router();
var forms1 = require('../model/form');


// route.get('/',function(req,res){
//   res.send("hi");
// })
/* GET home page. */
route.get('/getData', function(req, res, next) {

  	//res.json(data);
  forms1.find({},function(err,docs)
{
  if (err){
     res.send(err);
   }
   else{
  res.json(docs);
}
});
});

// route.put('/upfav', function(req, res, next) {
//
//   movies1.findOneAndUpdate({imdbID:req.body.imdbID},{Title:req.body.Title},function(err)
// {
//   if (err) throw err;
//   res.send("Updated");
// });
// });
  // var a=parseInt(req.param('a'));
  // var b=parseInt(req.param('b'));
  // var total=a+b;
  // res.send("Total:"+total);
//  res.send('movie get');

// route.delete('/delfav', function(req, res, next) {
// movies1.findOneAndRemove({imdbID:req.body.imdbID},function(err)
// {
//   if (err) throw err;
//   res.send("Deleted");
// });
// });

route.post('/save',function(req,res)
{
  console.log(req.body);
  var form=new forms1();
  form.inputname=req.body.inputname;
form.inputtype=req.body.inputtype;
form.inputlocate=req.body.inputlocate;
form.inputparticipants=req.body.inputparticipants;
form.inputstartdate=req.body.inputstartdate;
form.inputenddate=req.body.inputenddate;
  form.save(function(err)
{
  if(err)
  {
    res.send(err);
  }
  else
    {
      res.send('added');
       //res.json(req.body);
      console.log('Added');
      //res.send(movie);
    }
  });
});

module.exports = route;
