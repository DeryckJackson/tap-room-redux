import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <h3>Name: {props.name} | Brand: {props.brand} </h3>
  <p>Alcohol Content: {props.alcoholContent}% | Price: ${props.price} | Pints: {props.pints}</p>
  <hr/>
    </React.Fragment>
  )
}

Keg.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  pints: PropTypes.number,
  price: PropTypes.number,
  alcoholContent: PropTypes.number
}

export default Keg;