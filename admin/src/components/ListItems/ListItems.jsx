import { RxCross2 } from "react-icons/rx";
import { handleDelete } from "../../utils/foodFunctions";
import "./ListItems.css";

function ListItems({ list }) {
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>image</b>
          <b>name</b>
          <b>category</b>
          <b>price</b>
          <b>Action</b>
        </div>
        {list.map((item) => {
          return <ListItem item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}
function ListItem({ item }) {
  return (
    <div className="list-table-format">
      <img src={`http://localhost:5000/images/${item.image}`} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p>${item.price}</p>
      <p className="cursorCross" onClick={() => handleDelete(item._id)}>
        <RxCross2 />
      </p>
    </div>
  );
}
export default ListItems;
