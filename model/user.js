import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
})

const user = mongoose.model("user", userSchema);
export default  user;
