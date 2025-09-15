const mongoose = require('mongoose')

// Creating a Schema
const userSchema = mongoose.Schema({
  firstName:{
    type: String
  },
  lastName:{
    type:String
  },
  emailId:{
    type:String
  },
  password:{
    type:String
  },
  age:{
    type:Number
  },
  gender:{
    type:String
  }
})

// Creating a model
const User = mongoose.model("User",userSchema)  

module.exports = User