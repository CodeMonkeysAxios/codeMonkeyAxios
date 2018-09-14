import React from 'react';
import reactDOM from "react-dom";

const Forum  = ({onRouteChange, route}) => {

  return (

     <div className="route">
        onClick{() => onRouteChange("forum")}
     </div>
  );

}

export default Forum;
