import React from 'react';
import {Link} from "react-router-dom";

const Links = () => {

  return (

      <div>
        <Link to="/">HOME</Link>
        <Link to="/forum">FORUM</Link>
        <Link to="/tutorial">TUTORIAL</Link>
      </div>
      );
}

export default Links;
