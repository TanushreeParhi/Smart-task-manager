const User = require("../model/databaseModel")

async function handleSignupPost(req, res){
    const body = req.body;
    console.log(body);
    try{
        await User.create({
            fullName: body.fullName,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword
        })
        res.status(201).send("signup data stored successfully")
    }catch(err){
        console.log(err);
        res.status(500).send(`error: ${err}`)
    }

}

module.exports = {
    handleSignupPost
}