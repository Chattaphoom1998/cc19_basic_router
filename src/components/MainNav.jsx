//rfce
import React from "react";
import { Link, Route, Routes } from "react-router";

function MainNav() {
  return (
    <div>
      <nav className="flex justify-between  h-8 px-4 items-center bg-blue-200 ">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/recap">Recap</Link>
          <Link to="/recapUseState">RecapUseState</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
