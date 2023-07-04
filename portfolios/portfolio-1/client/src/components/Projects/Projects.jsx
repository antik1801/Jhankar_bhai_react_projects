import projImg1 from "../../assets/img/project-img1.png"
import projImg2 from '../../assets/img/project-img2.png'
import projImg3 from '../../assets/img/project-img3.png'
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap'
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const projects1 = [
    {
      title: "AirCnc",
      description: "A clone version of AirBnb",
      imgUrl: projImg1,
      url:"https://air-cnc-2.web.app/"
    },
    {
      title: "ToyLine Bd",
      description: "Online Toystiore ",
      imgUrl: projImg2,
      url:"https://toy-line-bd.web.app/"
    },
    {
      title: "Teasty Treats",
      description: "Resturents",
      imgUrl: projImg3,
      url: "https://tasty-treats-cb933.web.app/"
    },
    {
      title: "Bistro Boss",
      description: "Resturent and online services",
      imgUrl: projImg1,
    },
    {
      title: "Ema john",
      description: "Online E-commerce Platform",
      imgUrl: projImg2,
    },
    {
      title: "Cars Doctor",
      description: "Car servicing center",
      imgUrl: projImg3,
    },
  ]
  const projects2 = [
    {
      title: "AirCnc",
      description: "A clone version of AirBnb",
      imgUrl: projImg1,
    },
    {
      title: "ToyLine Bd",
      description: "Online Toystiore ",
      imgUrl: projImg2,
    },
    {
      title: "Teasty Treats",
      description: "Resturents",
      imgUrl: projImg3,
    },
    {
      title: "Bistro Boss",
      description: "Resturent and online services",
      imgUrl: projImg1,
    },
    {
      title: "Ema john",
      description: "Online E-commerce Platform",
      imgUrl: projImg2,
    },
    {
      title: "Cars Doctor",
      description: "Car servicing center",
      imgUrl: projImg3,
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <Tab.Container id="project-tabs" defaultActiveKey="first">
          <Nav variant="pills" className="flex mb-4">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects1.map((project, index)=>{
                      return(
                        <ProjectCard key={index} title={project.title} despription={project.description} imgUrl={project.imgUrl}></ProjectCard>
                      )
                    })
                  }
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row>
                  {
                    projects2.map((project, index)=>{
                      return(
                        <ProjectCard key={index} title={project.title} despription={project.description} imgUrl={project.imgUrl}></ProjectCard>
                      )
                    })
                  }
                </Row>
            </Tab.Pane>
            {/* <Tab.Pane eventKey="third">

            </Tab.Pane> */}
          </Tab.Content>
          </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects