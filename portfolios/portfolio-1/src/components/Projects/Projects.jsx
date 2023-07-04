import projImg1 from "../../assets/img/project-img1.png"
import projImg2 from '../../assets/img/project-img2.png'
import projImg3 from '../../assets/img/project-img3.png'
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap'
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Bussiness Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Bussiness Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolore unde quod blanditiis animi quos. Nihil odio esse atque ullam.</p>
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
                    projects.map((project, index)=>{
                      return(
                        <ProjectCard key={index} title={project.title} despription={project.description} imgUrl={project.imgUrl}></ProjectCard>
                      )
                    })
                  }
                </Row>
            </Tab.Pane>
            {/* <Tab.Pane eventKey="second">

            </Tab.Pane> */}
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