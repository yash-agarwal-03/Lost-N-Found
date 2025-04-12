import React from "react";
import { Link } from "react-router-dom";
const LinkButton = ({ linkto, value }) => {
  return (
    <Link to={linkto} className="button">
      <button className="navbutton1">{value}</button>
    </Link>
  );
};
export default LinkButton;
