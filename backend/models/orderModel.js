import Mongoose from "mongoose";

const orderSchema = new Mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  country: { type: String, required: false },
  phoneNo: { type: Number, required: true },
  userId: { type: String, required: true },
  cart: { type: Array, required: true },
});

const orderModel =
  Mongoose.models.order || Mongoose.model("order", orderSchema);

export default orderModel;
