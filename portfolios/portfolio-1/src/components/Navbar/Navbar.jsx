import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)
    useEffect(()=>{
        if (window.scrollY>50) {
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
        window.addEventListener("Scroll", onscroll);
        return ()=> window.removeEventListener("scroll", onscroll)
    },[])
    const onUpdateActiveLink = value =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <span className="navbar-toggler-icon"></span> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("skills") }>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("projects") }>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"> <img src={navIcon1} alt="" /> </a>
                <a href="#"> <img src={navIcon2} alt="" /> </a>
                <a href="#"> <img src={navIcon3} alt="" /> </a>
            </div>
            <button className="btn btn-primary" onClick={()=>console.log('contact')}> <span>Lets Contact</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
