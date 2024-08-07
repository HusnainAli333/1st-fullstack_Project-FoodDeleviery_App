import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import ListItems from "../../components/ListItems/ListItems";
function List() {
  const [list, setList] = useState([]);
  const [, setIsLoading] = useState(false);

  async function fetchList() {
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

  useEffect(() => {
    fetchList();
  }, [list]);

  return (
    <>
      <ListItems list={list} />
    </>
  );
}

export default List;
