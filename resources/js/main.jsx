import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./views/components/admin";
import Layout from "./views/components/layout";
import Login from "./views/components/Login";
import Sidebar from "./views/components/Sidebar";
import Topnav from "./views/components/Topnav";
import User from "./views/components/user";
import Try from "./views/try";

export default function Main() {
    return (
        <div className="bg-slate-100 h-screen overflow-auto">
            <Topnav />
            <Sidebar />
            {/* <Login /> */}
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Topnav />}>
        //             <Route index element={<Try />} />
        //             <Route path="/eggy" element={<Layout />}>
        //                 <Route index element={<Admin />} />
        //                 <Route path="/eggy/user" element={<User />} />
        //             </Route>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
