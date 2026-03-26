const User = require("../model/databaseModel")
const jwt = require("jsonwebtoken")

async function handleLoginPost(req, res){
    const {email, password} = req.body;
    console.log(`email: ${email} and password: ${password}`);
    
    try{
      const user = await User.findOne({email})
      //check valid user or not
      if(!user || user.password !== password){
       return  res.status(401).send("wrong email and password")
      }
      
    //   create jwt token
    const token = jwt.sign(
        {id: user._id},
        "SECRET_KEY",
        {expiresIn: "1h"}
    )
    console.log(token);
    
    res.json({token, 
        user:{
            fullName: user.fullName,
            email: user.email
        }
    })
    }catch(error){
        console.log(`login error: ${error}`);
        
    }
}

module.exports ={
    handleLoginPost
}