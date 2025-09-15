const mongoose = require('mongoose')

const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://root:root@cluster0.yflce3a.mongodb.net/devTinder'
  );
}

module.exports = connectDB

