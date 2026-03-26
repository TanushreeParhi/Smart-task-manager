const mongoose = require ("mongoose")

const dataSchema = new mongoose.Schema(
    {
    fullName:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    confirmPassword:{type: String, required: true}
},{timestamps: true}
)

const User = mongoose.model("user", dataSchema);

module.exports = User