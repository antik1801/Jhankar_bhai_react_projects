import { Col } from "react-bootstrap"

export const ProjectCard = ({title, despription, imgUrl}) =>{
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{despription}</span>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                        <button className="btn btn-danger">Live Site</button>
                        <button className="btn btn-danger">See Details</button>
                    </div>
                </div>
            </div>
        </Col>
    )
}