import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.name} | Brand: {keg.brand} </h3>
      <p>Alcohol Content: {keg.alcoholContent}% | Price: ${keg.price} | Pints: {keg.pints}</p>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propType = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;