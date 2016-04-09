var express = require('express')
  , router = express.Router()
  , Message = require('../models/message')


router.post("/", function(req,res){
  user = req.user.name;
  text = req.body.text

  Message.create(user,text, function(err,message){
    res.redirect("/");
  });
})

module.exports = router
