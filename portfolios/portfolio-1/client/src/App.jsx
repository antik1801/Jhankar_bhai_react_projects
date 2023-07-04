import NavBar from "./components/Navbar/Navbar"
import "./App.css"
import Banner from "./components/Banner/Banner"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import ParticleJs from "./components/Particles/ParticleJs"

const App =()=> {
  return (
    <div>
      <ParticleJs></ParticleJs>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
