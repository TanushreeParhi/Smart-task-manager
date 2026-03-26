
const blacklist = [];

async function handleLogoutPost(req, res) {
    const token = await req.headers.authorization.split(" ")[1];
    console.log(token);
    
     blacklist.push(token);
    res.json({msg:"logged out"})
}
module.exports = {
    handleLogoutPost,
    blacklist,
}