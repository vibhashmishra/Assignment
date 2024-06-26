import React from "react";
import { Link } from "react-router-dom";
const Button = ({ btnLink, btn, onClick = () => {} }) => {
  return (
    <>
      <Link to={btnLink}>
        <button onClick={onClick} style={{ margin: "20px" }}>
          {btn}
        </button>
      </Link>
    </>
  );
};

export default Button;
