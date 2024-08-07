import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems/ListItems";
import { fetchList } from "../../utils/foodFunctions";
import "./List.css";

function List() {
  const [list, setList] = useState([]);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    fetchList(setIsLoading, setList);
  }, []);

  return (
    <>
      <ListItems list={list} />
    </>
  );
}

export default List;
