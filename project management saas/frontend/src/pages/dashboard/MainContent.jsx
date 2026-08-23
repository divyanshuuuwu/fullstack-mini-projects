import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { useEffect } from "react";

import TaskItem from "../../components/ui/TaskItem";
import StatusBadge from "../../components/ui/StatusBadge";

import useProjects from "../../components/hooks/useProjects";
import useTasks from "../../components/hooks/useTasks";

const MainContent = () => {
  const { projects } = useProjects();
  const { tasks, getMytasks } = useTasks();

  useEffect(() => {
    getMytasks();
  }, []);

  const recentProjects = [...(projects || [])]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  const totalProjects = projects?.length || 0;

  const completedProjects =
    projects?.filter((project) => project.status === "completed").length || 0;

  const inProgressProjects =
    projects?.filter((project) => project.status === "in-progress").length || 0;

  const pendingProjects =
    projects?.filter((project) => project.status === "pending").length || 0;

  const overdueProjects =
    projects?.filter((project) => project.status === "overdue").length || 0;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.65fr] gap-5">
      {/* ================= RECENT PROJECTS ================= */}

      <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
        {/* Section Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f1f]">
          <div>
            <h2 className="text-lg font-medium">Recent projects</h2>

            <p className="text-xs text-gray-600 mt-1">Your latest projects</p>
          </div>

          <NavLink
            to="/projects"
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition"
          >
            View all
            <ArrowUpRight size={14} />
          </NavLink>
        </div>

        {/* Projects */}
        <div className="p-4">
          {recentProjects.length > 0 ? (
            <div className="space-y-2">
              {recentProjects.map((project) => (
                <NavLink
                  key={project._id}
                  to={`/projects/${project._id}`}
                  className="group flex items-center justify-between gap-4
                                 px-4 py-4 rounded-xl
                                 hover:bg-[#171717]
                                 transition"
                >
                  {/* Project Info */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className="w-10 h-10 rounded-lg bg-[#1b1b1b]
                                        border border-[#252525]
                                        flex items-center justify-center
                                        shrink-0"
                    >
                      <FolderKanban size={17} className="text-gray-400" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium truncate">
                        {project.name}
                      </h3>

                      <p className="text-xs text-gray-600 mt-1 truncate max-w-100">
                        {project.description || "No description"}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-4 shrink-0">
                    <StatusBadge status={project.status} />

                    <ArrowUpRight
                      size={16}
                      className="text-gray-700 group-hover:text-gray-300 transition"
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center">
              <div
                className="w-12 h-12 rounded-xl bg-[#171717]
                                  flex items-center justify-center mb-4"
              >
                <FolderKanban size={20} className="text-gray-600" />
              </div>

              <p className="text-sm text-gray-400">No projects yet</p>

              <p className="text-xs text-gray-600 mt-1">
                Create your first project to get started.
              </p>

              <NavLink
                to="/projects/create"
                className="mt-4 text-xs text-white hover:text-gray-300"
              >
                Create a project →
              </NavLink>
            </div>
          )}
        </div>
      </section>

      {/* ================= MY TASKS ================= */}

      <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f1f]">
          <div>
            <h2 className="text-lg font-medium">My tasks</h2>

            <p className="text-xs text-gray-600 mt-1">Tasks assigned to you</p>
          </div>

          <NavLink
            to="/tasks"
            className="text-xs text-gray-500 hover:text-white transition"
          >
            View all
          </NavLink>
        </div>

        {/* Tasks */}
        {/* Tasks */}
        <div className="p-4 space-y-2">
          {tasks?.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task._id}
                title={task.title}
                project={task.project?.name}
                status={task.status}
                priority={task.priority}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-10">
              No tasks assigned to you
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
