import React from 'react';
import {Link} from "react-router-dom";

const HOME = () => (
    <div className="HOME-BOX">
      <h2> HOME </h2>
      <div className="menu-BOX">
        <Link to="/TODO"> TODO MENU </Link>
      </div>
      <div className="menu-BOX">
        <Link to="/BOARD"> BOARD MENU </Link>
      </div>
    </div>
);

export default HOME;