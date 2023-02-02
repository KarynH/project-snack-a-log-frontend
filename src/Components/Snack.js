import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Snacks from "./Snacks";



    const Snack = ({ snack }) => {
        return (
        <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={snack.image} alt={snack.name} />
        <Card.Body>
        <Card.Title>{snack.name}</Card.Title>
        
        </Card.Body>
        </Card>
        );
        };
        
        
        export default Snack;