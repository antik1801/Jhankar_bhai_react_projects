import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main-container1">
      <MainContainer></MainContainer>
      </div>
    </div>
  );
}

export default App;
