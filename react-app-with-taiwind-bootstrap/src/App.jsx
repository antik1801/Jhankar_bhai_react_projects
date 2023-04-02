import "./App.css";
import NavBar from "./componenets/Navbar/NavBar";
import PriceList from "./componenets/PriceList/PriceList";

function App() {
  
  return (
    <div className="app">
      <NavBar></NavBar>
      {/* <h1 className="text-5xl text-purple-600">Hello world</h1> */}
      <PriceList></PriceList>
    </div>
  );
}

export default App;
