const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")

app.post("/signup", async(req,res) => {
  const user = new User ({
    firstName: "Vivek",
    lastName: "Pardhi",
    emailId: "vivek@gmail.com",
    password: "asdffg"
  });

  try{
  await user.save();
  res.send("User added Succesfully")
} catch(err){
  res.status(400).send("Error saving the user:"+ err.messsage);
}
})
    

connectDB()
    .then(()=>{
        console.log("Database Connect Succesfully")
        app.listen(3000, () => {
    console.log("Server is successfully listening to port 3000...");
    });
  })
  .catch((err)=>{
    console.log("Database Cannotbe Connected");
    
  })






