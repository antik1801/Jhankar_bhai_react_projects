import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'
import githubIcon from '../../assets/img/github.svg'

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
    const resume = ''
    const downloadFileAtURL = url =>{

    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <span className="navbar-toggler-icon"></span> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("skills") }>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("projects") }>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("contact") }>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/gazi-ehsanul-haque-3b8b92249/" target="blank"> <img src={navIcon1} alt="" /> </a>
                <a href="https://www.facebook.com/eshanulhaque.antik" target="blank"> <img src={navIcon2} alt="" /> </a>
                <a href="https://www.instagram.com/ayy_hyy_antik/" target="blank"> <img src={navIcon3} alt="" /> </a>
                <a href="https://github.com/antik1801" target="blank"> <img src={githubIcon} alt="" /> </a>
            </div>
            <a href="Gazi_Ehsanul_Haque_Resume.pdf" download="Gazi_Ehsanul_Haque_Resume.pdf"> <button className="btn btn-primary"> Download Resume </button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
