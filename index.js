var express = require('express');
var router = express.Router();
var multer = require('multer')
let userModal = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'public/images/uploads')
  },
  filename: function (req, file, cb){
    cb(null, file.originalname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })
router.post('/submit', upload.single('title'), function(req,res){
 userModal.create({
  name: req.body.name,
  title: req.file.title
 })
 .then(function(data){
  res.render('gallery',{data})
 })
})

module.exports = router;
