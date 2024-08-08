import axios from "axios";
import { toast } from "react-toastify";

export async function fetchList(setList) {
  try {
    const Response = await axios.get(
      "http://localhost:5000/api/food/fetchFood"
    );

    setList(Response.data.data);
  } catch (error) {
    toast.error("Something went wrong");
  }
}

export async function handleDelete(idfood) {
  try {
    const Response = await axios.post("http://localhost:5000/api/food/remove", {
      id: idfood,
    });
    console.log(Response);
    toast.success(Response.data.message);
  } catch (error) {
    console.log(error);
    toast.success(Response.data.message);
  }
}

export async function handleAdd(formData, setData, setImage) {
  const Response = await axios.post(
    "http://localhost:5000/api/food/add",
    formData
  );

  if (Response.data.success) {
    setData({
      name: "",
      price: "",
      description: "",
      category: "salad",
    });
    setImage(false);
    toast.success(Response.data.message);
  } else {
    toast.error(Response.data.message);
  }
}
