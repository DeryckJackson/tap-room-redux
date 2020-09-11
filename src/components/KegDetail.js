import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.name} | Brand: {keg.brand} </h3>
      <p>Alcohol Content: {keg.alcoholContent}% | Price: ${keg.price} | Pints: {keg.pints}</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propType = {
  keg: PropTypes.object
}

export default KegDetail;