import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) => 
        <Keg 
          key={keg.id}
          id={keg.id}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
        />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;