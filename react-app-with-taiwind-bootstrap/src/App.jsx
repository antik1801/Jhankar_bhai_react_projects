import "./App.css";
import NavBar from "./componenets/Navbar/NavBar";
import PriceList from "./componenets/PriceList/PriceList";
import ShowCharts from "./componenets/ShowCharts/ShowCharts";

function App() {
  
  return (
    <div className="app">
      <NavBar></NavBar>
      {/* <h1 className="text-5xl text-purple-600">Hello world</h1> */}
      <PriceList></PriceList>
      <ShowCharts></ShowCharts>
    </div>
  );
}

export default App;
