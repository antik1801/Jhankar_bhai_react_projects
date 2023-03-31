import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordians from './components/Accordians/Accordians';

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <MainContainer></MainContainer>
      <Accordians></Accordians>
      <ToastContainer />
    </div>
  )
}

export default App
