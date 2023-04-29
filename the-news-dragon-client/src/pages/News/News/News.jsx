import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInside from "../EditorsInside.jsx/EditorsInside";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  //   console.log(news);
  return (
    <div>
      <Card className="mt-3">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>
    </div>
  );
};

export default News;
