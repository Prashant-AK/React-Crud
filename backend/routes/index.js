var express = require('express');
var router = express.Router();
var newuser = require('../models/data');
var multer = require('multer');

var storage = multer.diskStorage({

  destination: process.cwd() + '/public/uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({
  storage: storage,
})

router.get('/',function(req,res){
  newuser.find({})

  .then(result=>{
    // console.log(result)
    res.json(result)
  })
  // res.json('hello I am good boy and karan is a boy');
})

router.get('/users/:userid',function(req,res){
  newuser.findById(req.params.userid)
  .then((result)=>{
   // res.json('still running',{data:newdata});
   res.json(result);
  })
})

router.get('/users/delete/:userid',function(req,res){
  newuser.findByIdAndDelete(req.params.userid)
  .then((result)=>{
   // res.json('still running',{data:newdata});
   res.json(result);
  })
})

router.post('/users/update/:userid', upload.single('Image'), function (req, res, next) {
  // res.json(req.body)
  newuser.findByIdAndUpdate(req.params.userid, {
    $set: {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Email_ID: req.body.Email_ID,
      Phone_Number: req.body.Phone_Number,
      Image:req.file.filename
    }
  }, { new: true })
    .then((newdata) => {
      res.json(newdata);
      next

    })
});

/* GET home page. */
router.post('/',upload.single('Image'), function (req, res, next) {
  console.log(req.body);
  // const { First_Name, Last_Name, Email_ID, Phone_Number } = req.body;
  newuser.findOne({ Email_ID: req.body.Email_ID }, (err, data) => {
    console.log("hello mei chala")
    if (err) console.log("error coming", err);
    if (data) {
      // console.log("already username");
      // req.flash('error', 'Email already taken.')
      res.json("email already exist");
    }
    else {
      newuser.create({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email_ID: req.body.Email_ID,
        Phone_Number: req.body.Phone_Number,
        Image:req.file.filename
      })
        .then((shop) => {
          // res.json(req.body);
          res.json( "data found")
    
        })
    }


  })//res.json('index', { title: 'Express' });
});

module.exports = router;
