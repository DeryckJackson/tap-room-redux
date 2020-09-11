import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) => 
        <Keg 
          whenKegClicked = { props.onKegSelection }
          whenPintSold={props.onSellPint}
          key={keg.id}
          id={keg.id}
          name={keg.name}
          brand={keg.brand}
          pints={keg.pints}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
        />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onSellPint: PropTypes.func
}

export default KegList;