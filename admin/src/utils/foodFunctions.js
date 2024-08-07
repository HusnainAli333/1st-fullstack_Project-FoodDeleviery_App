import axios from "axios";
import { toast } from "react-toastify";

export async function fetchList(setIsLoading, setList) {
  setIsLoading(true);
  try {
    toast.info("Loading...", { autoClose: true });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const Response = await axios.get(
      "http://localhost:5000/api/food/fetchFood"
    );

    console.log(Response);
    setList(Response.data.data);
    toast.dismiss();
    toast.success("Food Items Fetched!");
  } catch (error) {
    console.log(error);
    toast.dismiss();
    toast.error("Something went wrong");
  } finally {
    setIsLoading(false);
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
