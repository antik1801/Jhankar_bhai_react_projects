import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './components/MainContainer/MainContainer'
import SideCart from './components/SideCart/SideCart';
import NavScrollExample from './components/Navbar/Navbar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavScrollExample></NavScrollExample>
        <Outlet />
       <Header></Header>
        <MainContainer></MainContainer>
    </div>
  )
}

export default App
