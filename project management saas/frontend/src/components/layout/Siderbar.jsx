import React from "react";
import { NavLink } from "react-router-dom";
import { Layers } from "lucide-react";

const Siderbar = () => {
  return (
    //main container
    <div className="w-80 bg-[rgba(21,21,21,1)] h-screen border-r-2 border-zinc-800 flex flex-col gap-5">
      {/* logo */}
      <div className="p-6 flex gap-5 items-center">
        <Layers size={40} color="#d54444" />
        <h1 className="text-white text-3xl ">Flowboard</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-6 gap-5">
        <NavLink
          to="/dashboard"
            end
          className={({ isActive }) =>
            `flex items-center gap-4 px-6 py-4 rounded-xl text-xl transition-all duration-200
                            ${
                              isActive
                                ? "bg-[#3a3a3a] text-white"
                                : "text-[#b8b8b8] hover:bg-[#252525] hover:text-white"
                            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/taskdetails"
                         className={({ isActive }) =>
                            `flex items-center gap-4 px-6 py-4 rounded-xl text-xl transition-all duration-200
                            ${
                            isActive
                                ? "bg-[#3a3a3a] text-white"
                                : "text-[#b8b8b8] hover:bg-[#252525] hover:text-white"
                            }`
                        }

        >My Tasks</NavLink>

        <NavLink to="/dashboard/projects"
                    className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 rounded-xl text-xl transition-all duration-200
                ${
                isActive
                    ? "bg-[#3a3a3a] text-white"
                    : "text-[#b8b8b8] hover:bg-[#252525] hover:text-white"
                }`
            }
        
        
        >Projects</NavLink>

        <NavLink to="/dashboard/settings"
                         className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-4 rounded-xl text-xl transition-all duration-200
                    ${
                    isActive
                        ? "bg-[#3a3a3a] text-white"
                        : "text-[#b8b8b8] hover:bg-[#252525] hover:text-white"
                    }`
                }
        
        
        >Settings</NavLink>
      </nav>
    
    {/* profile */}
    <div className="mt-auto p-6 flex items-center gap-4 text-white border-t border-zinc-800">
        <div className="h-10 w-10 bg-amber-200 rounded-full" >
            
        </div>
        <NavLink to="/dashboard/profile">
        divyanshu
        </NavLink>
    </div>






    </div>
  );
};

export default Siderbar;
