import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoDocuments, IoSettingsSharp } from "react-icons/io5";
import { MdApproval } from "react-icons/md";
import { RiArchiveStackFill, RiDashboardHorizontalFill } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="flex bg-green-800 w-[35vh] h-[89.5vh]">
            <div className="text-slate-200 w-full">
                <ul className="font-bold">
                    <li className="gap-2 flex items-center py-4 px-8 hover:shadow-lg hover:bg-green-700">
                        <RiDashboardHorizontalFill />
                        Dashboard
                    </li>
                    <li className="gap-2 flex items-center py-4 px-8 hover:shadow-lg hover:bg-green-700">
                        <MdApproval />
                        Approval
                    </li>
                    <li className="gap-2 flex items-center py-4 px-8 hover:shadow-lg hover:bg-green-700">
                        <IoDocuments />
                        Thesis
                    </li>
                    <li className="gap-2 flex items-center py-4 px-8 hover:shadow-lg hover:bg-green-700">
                        <FaUsers />
                        Users
                    </li>
                    <li className="gap-2 flex items-center  py-4 px-8 hover:shadow-lg hover:bg-green-700">
                        <RiArchiveStackFill />
                        Archives
                    </li>
                    <li className="gap-2 flex items-center py-4 px-8 hover:shadow-lg hover:bg-green-700">
                        <IoSettingsSharp />
                        Tools
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
