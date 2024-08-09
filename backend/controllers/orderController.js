import orderModel from "../models/orderModel.js";
async function postSendOrder(req, res) {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipCode,
    country,
    phoneNo,
    userId,
    cart,
  } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !userId || !cart) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  try {
    // Create a new order instance
    const order = new orderModel({
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zipCode,
      country,
      phoneNo,
      userId,
      cart,
    });

    // Save the order to the database
    const data = await order.save();

    // Respond with success
    res.status(201).json({
      success: true,
      message: "Your order has been placed",
      order: data,
    });
  } catch (error) {
    console.error("Error saving order:", error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
}

async function fetchOrder(req, res) {}

export { postSendOrder, fetchOrder };
