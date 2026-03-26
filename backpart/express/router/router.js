const express = require("express")
const router = express.Router();
const {handleSignupPost} = require('../controller/signup')
const {handleLoginPost} = require('../controller/login')
const {handleLogoutPost} = require('../controller/logout')
const { createTask } = require('../controller/createTask')
const { getTasks } = require('../controller/getTask')
const  authMiddleware  = require("../customMiddleware/logoutMiddleware")


router.post("/signup", handleSignupPost)
router.post("/login", handleLoginPost)
router.post("/dashboard",authMiddleware, handleLogoutPost) // logout
router.post("/tasks", authMiddleware, createTask)
router.get("/tasks", authMiddleware, getTasks) // fetch tasks for todo & dashboard


module.exports = router;