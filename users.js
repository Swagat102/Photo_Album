let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
.then(function(){
  console.log('Database connected')
})
.catch(function(e){
  console.log(e)
})
let userSchema = mongoose.Schema({
  name: String,
  title: String
})

module.exports = mongoose.model('photo', userSchema)