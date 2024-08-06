import React from "react";
import { Link, Outlet } from "react-router-dom";

const Topnav = () => {
    return (
        <div className="px-2 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-yellow-100 via-25% to-green-700 shadow-md text-sm">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.e66EcTlgjiMjCAdZYSJhfgHaHd&pid=Api"
                        alt="SPCPClogo"
                        className="w-[60px]"
                    />
                    <h1 className="text-3xl text-slate-700 font-semibold">
                        SPCPC THESIS ARCHIVER
                    </h1>
                </div>
                <div className="">
                    <div className="flex text-white font-bold items-center">
                        <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-green-500 hover:shadow-lg"
                        >
                            HOME
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-green-500 hover:shadow-lg"
                        >
                            THESIS
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-green-500 hover:shadow-lg"
                        >
                            LOGIN
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-green-500 hover:shadow-lg"
                        >
                            REGISTER
                        </a>
                    </div>
                </div>
            </div>
            {/* <h1 className="">THIS IS TOPNAV</h1>
            <Link to="/">Try</Link>
            <br />
            <Link to="/eggy">Layout</Link>

            <Outlet /> */}
        </div>
    );
};

export default Topnav;
