// import Cards from "../components/GenericCard/Cards";
import Filter from "../components/GenericFiltr/Filter";
import Sidebar from "../components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex h-full">
      <div className="w-40">
        <Sidebar />
      </div>
      <Filter />
      {/* <Cards /> */}
    </div>
  );
};

export default App;
