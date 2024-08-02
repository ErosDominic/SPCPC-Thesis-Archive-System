import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <h1 className="text-3xl text-justify">this is admin</h1>
            <h1>THIS IS admin</h1>
            <Link to="/eggy/user">user</Link>
            <br />
            <Link to="/eggy/">admin</Link>
            <Outlet />
        </div>
    );
}
