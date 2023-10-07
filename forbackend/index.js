const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://vinaynishad8434:admin@cluster1.te6dr6f.mongodb.net/?retryWrites=true&w=majority");
  console.log("connect to atlas server")
}
const userSchema = new mongoose.Schema({
    username: String,
    Email: String,
    password : String
  });
  const User = mongoose.model('User', userSchema);

server.use(cors());
server.use(bodyParser.json());

server.post ('/dummy' , async (req,res) => {
 
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.Email = req.body.Email;

    const doc =  await  user.save()
  
    console.log(doc)
    res.json(doc)
})

server.listen(8080 , () =>{
    console.log("server started")
})
