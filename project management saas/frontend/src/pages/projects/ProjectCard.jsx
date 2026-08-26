import React, { useEffect } from "react";
import {
  MoreHorizontal,
  FolderKanban,
  Users,
  CheckCircle2,
  Clock3,
  Circle,
  AlertCircle,
} from "lucide-react";

import useProjects from "../../components/hooks/useProjects";

const ProjectCard = () => {
  const { projects, getProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return {
          icon: <CheckCircle2 size={14} />,
          className:
            "text-gray-300 bg-[#1b1b1b] border-[#303030]",
          label: "Completed",
        };

      case "in-progress":
        return {
          icon: <Clock3 size={14} />,
          className:
            "text-gray-300 bg-[#181818] border-[#292929]",
          label: "In Progress",
        };

      case "overdue":
        return {
          icon: <AlertCircle size={14} />,
          className:
            "text-gray-400 bg-[#181818] border-[#292929]",
          label: "Overdue",
        };

      case "pending":
      default:
        return {
          icon: <Circle size={14} />,
          className:
            "text-gray-500 bg-[#151515] border-[#252525]",
          label: "Pending",
        };
    }
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="
          w-14 h-14
          rounded-2xl
          bg-[#151515]
          border border-[#252525]
          flex items-center justify-center
          mb-4
        ">
          <FolderKanban
            size={24}
            className="text-gray-600"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-300">
          No projects yet
        </h3>

        <p className="text-xs text-gray-600 mt-2">
          Create your first project to get started.
        </p>
      </div>
    );
  }

  return (
    <div>

      {/* Project count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-600">
          {projects.length}{" "}
          {projects.length === 1 ? "project" : "projects"}
        </p>

        <p className="text-xs text-gray-700">
          Your projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-4
      ">

        {projects.map((project) => {

          const status = getStatusStyles(project.status);

          return (
            <div
              key={project._id}
              className="
                group
                bg-[#111111]
                border border-[#1f1f1f]
                rounded-2xl
                p-5
                hover:border-[#303030]
                hover:bg-[#121212]
                transition
                cursor-pointer
              "
            >

              {/* Top */}
              <div className="
                flex
                items-start
                justify-between
                mb-5
              ">

                <div className="
                  flex
                  items-center
                  gap-3
                  min-w-0
                ">

                  {/* Project icon */}
                  <div className="
                    w-10 h-10
                    rounded-xl
                    bg-[#191919]
                    border border-[#292929]
                    flex items-center justify-center
                    shrink-0
                  ">
                    <FolderKanban
                      size={18}
                      className="text-gray-400"
                    />
                  </div>

                  {/* Name */}
                  <div className="min-w-0">

                    <h3 className="
                      text-sm
                      font-medium
                      text-gray-200
                      truncate
                      group-hover:text-white
                      transition
                    ">
                      {project.name}
                    </h3>

                    <p className="
                      text-xs
                      text-gray-600
                      mt-1
                    ">
                      Created{" "}
                      {new Date(
                        project.createdAt
                      ).toLocaleDateString()}
                    </p>

                  </div>

                </div>

                {/* More button */}
                <button
                  type="button"
                  className="
                    p-1.5
                    rounded-lg
                    text-gray-600
                    hover:text-white
                    hover:bg-[#1b1b1b]
                    transition
                  "
                >
                  <MoreHorizontal size={17} />
                </button>

              </div>

              {/* Description */}
              <p className="
                text-xs
                leading-5
                text-gray-500
                min-h-[40px]
                mb-5
                line-clamp-2
              ">
                {project.description}
              </p>

              {/* Status + Priority */}
              <div className="
                flex
                items-center
                gap-2
                mb-5
              ">

                {/* Status */}
                <span
                  className={`
                    inline-flex
                    items-center
                    gap-1.5
                    px-2.5
                    py-1
                    rounded-lg
                    border
                    text-[11px]
                    ${status.className}
                  `}
                >
                  {status.icon}
                  {status.label}
                </span>

                {/* Priority */}
                <span className="
                  px-2.5
                  py-1
                  rounded-lg
                  border border-[#252525]
                  bg-[#151515]
                  text-[11px]
                  text-gray-500
                  capitalize
                ">
                  {project.priority} priority
                </span>

              </div>

              {/* Members */}
              <div className="
                pt-4
                border-t border-[#1f1f1f]
                flex
                items-center
                justify-between
              ">

                <div className="
                  flex
                  items-center
                  gap-2
                ">

                  <Users
                    size={14}
                    className="text-gray-600"
                  />

                  <span className="
                    text-xs
                    text-gray-500
                  ">
                    {project.members?.length || 0}{" "}
                    {project.members?.length === 1
                      ? "member"
                      : "members"}
                  </span>

                </div>

                {/* Owner */}
                <span className="
                  text-[11px]
                  text-gray-700
                ">
                  Owner
                </span>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default ProjectCard;