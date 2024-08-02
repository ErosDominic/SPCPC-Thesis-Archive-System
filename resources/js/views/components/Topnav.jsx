import React from "react";
import { Link, Outlet } from "react-router-dom";

const Topnav = () => {
    return (
        <div>
            <h1>THIS IS TOPNAV</h1>
            <Link to="/">Try</Link>
            <br />
            <Link to="/eggy">Layout</Link>

            <Outlet />
        </div> 
    );
};

export default Topnav;
