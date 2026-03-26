const taskModel = require("../model/taskModel")

const getTasks = async (req, res) => {
    const tasks = await taskModel.find({
        userId: req.user._id || req.user.id
    })
    console.log("database fetch data in getTask.js:", tasks );
    
    res.json(tasks)
}

module.exports = {
    getTasks,
}