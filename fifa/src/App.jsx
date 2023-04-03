import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './components/MainContainer/MainContainer'
import SideCart from './components/SideCart/SideCart';
import NavScrollExample from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
        <NavScrollExample></NavScrollExample>
       <Header></Header>
        <MainContainer></MainContainer>
    </div>
  )
}

export default App
