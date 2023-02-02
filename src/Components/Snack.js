import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Snack = ({ snack }) => {
  return (
    <div className="tastySnackAttackId">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={snack.image} alt={snack.name} />
        <Card.Body>
          <Link to={`/snacks/${snack.id}`}>
            <Card.Title>{snack.name}</Card.Title>
             </Link>
            <span>
              {snack.is_healthy ? (
                "❤️"
              ) : (
                "♡"
              )}
            </span>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default Snack;
