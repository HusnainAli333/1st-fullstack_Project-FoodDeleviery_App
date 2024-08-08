import { useEffect, useState } from "react";
import ListItems from "../../components/ListItems/ListItems";
import { fetchList } from "../../utils/foodFunctions";
import "./List.css";

function List() {
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // const [, setIsLoading] = useState(false);

  useEffect(() => {
    fetchList(setList);
  }, [refresh]);

  return (
    <>
      <ListItems list={list} refresh={refresh} setRefresh={setRefresh} />
    </>
  );
}

export default List;
