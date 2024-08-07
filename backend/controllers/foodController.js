import express from "express";
import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  let imageName = `${req.file.filename}`;

  const foodItem = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: imageName,
  });

  foodItem
    .save()
    .then(() => {
      return res.json({ success: true, message: "Food Added " });
    })
    .catch((err) => res.json({ success: false, message: "Erro" }));
};

const fetchFood = (req, res) => {
  foodModel
    .find({})
    .then((result) => {
      return res.json({ success: true, data: result });
    })
    .catch((err) => {
      return res.json({ success: false, message: "Error" });
    });
};

const removeFood = (req, res) => {
  foodModel
    .findById(req.body.id)
    .then((result) => {
      fs.unlink(`uploads/${result.image}`, () => {});
    })
    .catch((err) => console.log(err));

  foodModel
    .findByIdAndDelete(req.body.id)
    .then((result) => {
      return res.json({ success: true, message: "Item deleted Successfuly" });
    })
    .catch((err) => {
      return res.json({ success: false, message: "Error" });
    });
};

export { addFood, fetchFood, removeFood };
