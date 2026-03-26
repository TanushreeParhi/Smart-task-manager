const taskModel = require("../model/taskModel")

const createTask = async (req, res)=>{
    try{
           console.log("REQ.USER 👉", req.user);   // 👈 DEBUG
    console.log("REQ.BODY 👉", req.body);          // 👈 DEBUG
        
    const { inputTask } = req.body;
    console.log(`title from createTask ${inputTask}`);
    
    const newTask = new taskModel({
        inputTask,
        userId: req.user._id || req.user.id
    })
    await newTask.save();

    res.json(newTask)
    } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ msg: "Task not saved" });
  }
}

module.exports = {
    createTask
}