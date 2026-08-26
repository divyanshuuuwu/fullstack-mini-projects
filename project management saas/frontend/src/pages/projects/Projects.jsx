import React from "react";
import {
  Plus,
  Search,
  MoreHorizontal,
  FolderKanban,
  Users,
  CheckCircle2,
  Clock3,
  Circle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const navigate = useNavigate();

  

  return (
    <div className="h-screen bg-[#0b0b0b] text-white px-6 py-8 overflow-auto scrollbar-none">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-[#151515] border border-[#252525] flex items-center justify-center">
                <FolderKanban size={18} className="text-gray-300" />
              </div>

              <h1 className="text-2xl font-semibold tracking-tight">
                My Projects
              </h1>
            </div>

            <p className="text-sm text-gray-500">
              Manage your projects and keep track of your team's progress.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard/createProject")}
            className="
              inline-flex items-center justify-center gap-2
              px-4 py-2.5
              rounded-xl
              bg-white
              text-black
              text-sm font-medium
              hover:bg-gray-200
              transition
            "
          >
            <Plus size={16} />
            New project
          </button>

        </div>


        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={16}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2
                text-gray-600
              "
            />

            <input
              type="text"
              placeholder="Search projects..."
              className="
                w-full
                bg-[#111111]
                border border-[#1f1f1f]
                rounded-xl
                pl-11 pr-4 py-3
                text-sm text-white
                placeholder:text-gray-600
                outline-none
                focus:border-[#353535]
                transition
              "
            />
          </div>

          {/* Filter */}
          <select
            className="
              bg-[#111111]
              border border-[#1f1f1f]
              rounded-xl
              px-4 py-3
              text-sm text-gray-400
              outline-none
              focus:border-[#353535]
              transition
            "
          >
            <option>All projects</option>
            <option>In Progress</option>
            <option>Planning</option>
            <option>Completed</option>
          </select>

        </div>
      {/* project card */}
      <ProjectCard />

      </div>
    </div>
  );
};

export default Projects;