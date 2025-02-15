import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Snack = ({ snack }) => {
  return (
    <div className="tastySnackAttackId">
      <Card style={{ width: "18rem" }}>
        <Link to={`/snacks/${snack.id}`}>
          <Card.Img
            variant="top"
            src={snack.image_b64 ? snack.image_b64 : snack.image}
            alt={snack.name}
          />
        </Link>
        <Card.Body>
          <Card.Title>{snack.name}</Card.Title>

          <span>{snack.is_healthy ? "❤️" : "♡"}</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Snack;
