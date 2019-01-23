import { Link } from "react-router-dom";
import React from "react";

const Nav = () => (
  <div>
    <Link to={"/"} tag="a">
      Home
    </Link>
    <br />
    <Link to={"/hook"} tag="a">
      Hook
    </Link>
    <br />
    <Link to={"/another"} tag="a">
      Another
    </Link>
  </div>
);

export default Nav;
