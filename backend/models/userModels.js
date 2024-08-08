import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: Array, default: [] },
  },
  { minimize: false }
);

const userModel = Mongoose.models.user || Mongoose.model("user", userSchema);

export default userModel;
