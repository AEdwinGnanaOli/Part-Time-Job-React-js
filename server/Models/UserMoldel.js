const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
// try {
//   require('bcrypt');
//   console.log('bcrypt module loaded successfully');
// } catch (err) {
//   console.error('Error loading bcrypt module:', err);
// }
const UserSchema = new mongoose.Schema({
    name: String, email: String, phone: String, password: String, role: String
})

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });
  
const UserModel = mongoose.model("userData", UserSchema, "usersData")


module.exports=UserModel