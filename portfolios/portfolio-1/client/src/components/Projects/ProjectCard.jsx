import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ProjectCard = ({title, despription, imgUrl, url}) =>{
    console.log(url)
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{despription}</span>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <a href={url} target="blank"> <button className="btn btn-danger">Live Site</button></a>
                      <Link to={"/details"}> <button className="btn btn-danger"> See Details </button></Link>
                    </div>
                </div>
            </div>
        </Col>
    )
}