import React from "react";
import { Link } from "react-router-dom";
import Snacks from "./Snacks";

const Snack = ({ snack }) => {
  return (
    <div className="tastySnackAttackId">
        <h3>{snack.name}</h3>
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt={`${snack.name} img`} width="150px" length='150px'/> // I added width and length to the img tag to make the images the same size
      </Link>
    </div>
  );
};


export default Snack;