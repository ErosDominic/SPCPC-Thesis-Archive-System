import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="h-[89.5vh] flex justify-center items-center text-sm ">
            <div className="mx-auto w-fit h-auto bg-slate-50 p-6 rounded-lg shadow-md border-t-4 border-b-2 border-b-green-700 border-t-green-700">
                <div className="flex justify-center items-center gap-2 p-2 border-b border-b-gray-600">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.e66EcTlgjiMjCAdZYSJhfgHaHd&pid=Api"
                        alt="SPCPC logo"
                        className="w-[60px]"
                    />
                    <h4 className="text-xl">
                        San Pedro City Polytechnic College
                    </h4>
                </div>
                <div className="my-2 text-xs font-semibold text-slate-700 py-3">
                    {/* <p className="mb-2">ENTER USERNAME</p> */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="bg-gray-200 min-w-full p-2 rounded-xl "
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600">
                            <FaUser />
                        </div>
                    </div>
                    <br />
                    {/* <p className="mb-2">ENTER PASSWORD</p> */}
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            className="bg-gray-200 min-w-full p-2 rounded-xl "
                        />
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-600 hover:text-gray-800"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <FaEyeSlash className="text-lg" />
                            ) : (
                                <FaEye className="text-lg" />
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className="bg-gray-300 text-gray-700 rounded p-6 text-center">
                    <h1 className="font-bold">SAMPLE CAPCHA</h1>
                </div>
                <div className="my-2">
                    <p>Enter code:</p>
                    <input
                        type="text"
                        placeholder="code here"
                        className="p-2 rounded border border-gray-300"
                    />
                </div> */}
                <div className="text-sm gap-2 text-white mt-8">
                    <button className="flex justify-center items-center w-full rounded text-center bg-green-700 p-2  mb-2 hover:bg-green-800">
                        <RiLoginBoxLine className="text-lg" />
                        Sign in
                    </button>
                    {/* <br />
                    <button className="w-full text-center bg-red-500 p-2 rounded">
                        Back
                    </button> */}
                </div>
                <hr />
                <div className="text-end m-2">
                    <a className="text-blue-600" href="#">
                        Register here
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
