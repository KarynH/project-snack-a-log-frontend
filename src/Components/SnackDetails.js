import Snacks from "./Snacks";

import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {

    const [snacks, setSnacks] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`${API}/snacks/${id}`)
          .then((res) => {
            console.log(res.data);
            setSnacks(res.data);
         })
          .catch((c) => {
            console.warn("catch", c);
         });
    },[id, API]);

    return (
        <div className="container show">
            <header className="snack-heading">{snacks.name}</header>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="dark" src={snacks.image} alt={snacks.name} />
          <Card.Body>
              <Card.Title>{snacks.name} <span>{snacks.is_healthy ? ("❤️") : ("♡")}</span></Card.Title>
              <ListGroup className="list-group-flush">
           <ListGroup.Item>Added sugar: {snacks.added_sugar}</ListGroup.Item>
           <ListGroup.Item>Fiber: {snacks.fiber} </ListGroup.Item>
           <ListGroup.Item>Protien: {snacks.protein}</ListGroup.Item>
           </ListGroup>
          </Card.Body>
        </Card>
        <ButtonGroup aria-label="Basic example">
     <Link to="/snacks"><Button variant="dark">Back</Button></Link>
     <Link to="/snacks/:id/edit"><Button variant="secondary">Edit</Button></Link>
      <Button variant="danger">Delete</Button>
    </ButtonGroup>
        </div>
      );
 }