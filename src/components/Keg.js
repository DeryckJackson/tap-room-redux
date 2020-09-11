import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
        <h3>Name: {props.name} | Brand: {props.brand} </h3>
        <p>Alcohol Content: {props.alcoholContent}% | Price: ${props.price} | Pints: {props.pints}</p>
        <button onClick = {() => props.whenKegClicked(props.id)} >View Keg</button>
        <button onClick={() => props.whenPintSold({
          id: props.id,
          name: props.name,
          brand: props.brand,
          pints: props.pints,
          price: props.price,
          alcoholContent: props.alcoholContent
        })}>Sell Pint</button>
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
  alcoholContent: PropTypes.number,
  whenKegClicked: PropTypes.func
}

export default Keg;