import { useSearchParams } from "react-router-dom";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Header/Header";
import MenuList from "../../components/MenuList/MenuList";

function Home() {
  const [searchParms, setSearchParams] = useSearchParams();

  function handleParms(category) {
    searchParms.set("category", category);
    setSearchParams(searchParms);
  }

  return (
    <div>
      <Header />
      <MenuList handleParms={handleParms} />
      <FoodDisplay />
    </div>
  );
}

export default Home;
