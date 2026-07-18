const User = require("../models/User");
async function signup(req , res) {
    
    const {name , email , password} = req.body

console.log(name);
console.log(email);
console.log(password);
    
}

module.exports = {
    signup
}