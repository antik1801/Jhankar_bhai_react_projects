import NavBar from "./components/Navbar/Navbar"
import "./App.css"
import Banner from "./components/Banner/Banner"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"

const App =()=> {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  )
}

export default App
