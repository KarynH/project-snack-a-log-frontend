import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Snack({snack}) {


    return(
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={snack.image} />
            <Card.Body>
                <Card.Title>{snack.name} {snack.is_healthy ? (<span>❤️</span>) : (<span>❤️</span>) }</Card.Title>
                <Card.Text>

                </Card.Text>
            </Card.Body>
        </Card>
    )
}