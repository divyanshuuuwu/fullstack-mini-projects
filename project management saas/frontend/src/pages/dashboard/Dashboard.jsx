import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FolderKanban,
  CheckCircle2,
  Clock3,
  Circle,
  AlertCircle,
  ArrowUpRight,
  Plus,
  CalendarDays,
} from "lucide-react";

import useAuth from "../../components/hooks/useAuth";
import useProjects from "../../components/hooks/useProjects";

const Dashboard = () => {
  const { user } = useAuth();
  const { projects, getProjects } = useProjects();

  const recentProjects = [...(projects || [])]
    .sort(
      (a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    )
    .slice(0, 4);

  useEffect(() => {
    getProjects();
  }, []);

  const totalProjects = projects?.length || 0;

  const completedProjects =
    projects?.filter(
      (project) => project.status === "completed"
    ).length || 0;

  const inProgressProjects =
    projects?.filter(
      (project) => project.status === "in-progress"
    ).length || 0;

  const pendingProjects =
    projects?.filter(
      (project) => project.status === "pending"
    ).length || 0;

  const overdueProjects =
    projects?.filter(
      (project) => project.status === "overdue"
    ).length || 0;

  return (
    <div className="h-screen w-full bg-[#0b0b0b] text-white px-6 py-6 md:px-10 overflow-auto scrollbar-none">

      <div className="max-w-375 mx-auto">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Dashboard
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Good morning, {user?.name?.split(" ")[0]}
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Here's what's happening across your projects.
            </p>
          </div>

          <NavLink
            to="/projects/create"
            className="inline-flex items-center justify-center gap-2
                       bg-white text-black px-4 py-2.5 rounded-lg
                       text-sm font-medium
                       hover:bg-gray-200 transition"
          >
            <Plus size={17} />
            Create project
          </NavLink>

        </div>


        {/* ================= STATS ================= */}

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">

          <StatCard
            icon={<FolderKanban size={17} />}
            title="Total projects"
            value={totalProjects}
          />

          <StatCard
            icon={<CheckCircle2 size={17} />}
            title="Completed"
            value={completedProjects}
          />

          <StatCard
            icon={<Clock3 size={17} />}
            title="In progress"
            value={inProgressProjects}
          />

          <StatCard
            icon={<Circle size={17} />}
            title="Pending"
            value={pendingProjects}
          />

          <StatCard
            icon={<AlertCircle size={17} />}
            title="Overdue"
            value={overdueProjects}
            danger
          />

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.65fr] gap-5">


          {/* ================= RECENT PROJECTS ================= */}

          <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">

            {/* Section Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f1f]">

              <div>
                <h2 className="text-lg font-medium">
                  Recent projects
                </h2>

                <p className="text-xs text-gray-600 mt-1">
                  Your latest projects
                </p>
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

                        <div className="w-10 h-10 rounded-lg bg-[#1b1b1b]
                                        border border-[#252525]
                                        flex items-center justify-center
                                        shrink-0">
                          <FolderKanban
                            size={17}
                            className="text-gray-400"
                          />
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

                  <div className="w-12 h-12 rounded-xl bg-[#171717]
                                  flex items-center justify-center mb-4">
                    <FolderKanban
                      size={20}
                      className="text-gray-600"
                    />
                  </div>

                  <p className="text-sm text-gray-400">
                    No projects yet
                  </p>

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
                <h2 className="text-lg font-medium">
                  My tasks
                </h2>

                <p className="text-xs text-gray-600 mt-1">
                  Tasks assigned to you
                </p>
              </div>

              <NavLink
                to="/tasks"
                className="text-xs text-gray-500 hover:text-white transition"
              >
                View all
              </NavLink>

            </div>


            {/* Tasks */}
            <div className="p-4 space-y-2">

              <TaskItem
                title="Fix auth token"
                project="Flowboard Backend"
                status="In Progress"
                priority="High"
              />

              <TaskItem
                title="Create task API"
                project="Flowboard Backend"
                status="Todo"
                priority="Medium"
              />

              <TaskItem
                title="Fix dashboard UI"
                project="Flowboard Frontend"
                status="In Progress"
                priority="Low"
              />

              <TaskItem
                title="Add project validation"
                project="Flowboard Backend"
                status="Todo"
                priority="Medium"
              />

            </div>

          </section>

        </div>


        {/* ================= BOTTOM SECTION ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">


          {/* Project Overview */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-lg font-medium">
                  Project overview
                </h2>

                <p className="text-xs text-gray-600 mt-1">
                  Current project distribution
                </p>
              </div>

              <FolderKanban
                size={18}
                className="text-gray-600"
              />

            </div>


            <div className="space-y-5">

              <ProgressRow
                label="Completed"
                value={completedProjects}
                total={totalProjects}
              />

              <ProgressRow
                label="In Progress"
                value={inProgressProjects}
                total={totalProjects}
              />

              <ProgressRow
                label="Pending"
                value={pendingProjects}
                total={totalProjects}
              />

              <ProgressRow
                label="Overdue"
                value={overdueProjects}
                total={totalProjects}
              />

            </div>

          </section>


          {/* Upcoming */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-lg font-medium">
                  Upcoming
                </h2>

                <p className="text-xs text-gray-600 mt-1">
                  Things that need your attention
                </p>
              </div>

              <CalendarDays
                size={18}
                className="text-gray-600"
              />

            </div>


            <div className="space-y-3">

              <UpcomingItem
                title="JWT Authentication"
                project="Flowboard Backend"
                date="Tomorrow"
              />

              <UpcomingItem
                title="Project API"
                project="Flowboard Backend"
                date="Aug 25"
              />

              <UpcomingItem
                title="Dashboard redesign"
                project="Flowboard Frontend"
                date="Aug 28"
              />

            </div>

          </section>

        </div>

      </div>

    </div>
  );
};


/* ================= COMPONENTS ================= */

const StatCard = ({
  icon,
  title,
  value,
  danger,
}) => {
  return (
    <div className="bg-[#111111] border border-[#1f1f1f]
                    rounded-xl p-5">

      <div className="flex items-center justify-between mb-4">

        <div className="text-gray-600">
          {icon}
        </div>

        <span className="text-[10px] uppercase tracking-wider text-gray-700">
          Projects
        </span>

      </div>

      <p
        className={`text-2xl font-semibold ${
          danger ? "text-red-400" : "text-white"
        }`}
      >
        {value}
      </p>

      <p className="text-xs text-gray-600 mt-1">
        {title}
      </p>

    </div>
  );
};


const StatusBadge = ({ status }) => {

  const styles = {
    completed:
      "bg-green-500/10 text-green-400 border-green-500/10",

    "in-progress":
      "bg-blue-500/10 text-blue-400 border-blue-500/10",

    pending:
      "bg-yellow-500/10 text-yellow-500 border-yellow-500/10",

    overdue:
      "bg-red-500/10 text-red-400 border-red-500/10",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-md border text-[10px] capitalize
        ${styles[status] || "bg-[#1b1b1b] text-gray-500 border-[#242424]"}`}
    >
      {status?.replace("-", " ") || "Unknown"}
    </span>
  );
};


const TaskItem = ({
  title,
  project,
  status,
  priority,
}) => {
  return (
    <div className="group p-3.5 rounded-xl hover:bg-[#171717] transition">

      <div className="flex items-start gap-3">

        <div className="mt-0.5">
          <Circle
            size={17}
            className="text-gray-700 group-hover:text-gray-400 transition"
          />
        </div>

        <div className="flex-1 min-w-0">

          <div className="flex items-start justify-between gap-3">

            <p className="text-sm text-gray-300 truncate">
              {title}
            </p>

            <span
              className={`text-[10px] shrink-0 ${
                priority === "High"
                  ? "text-red-400"
                  : priority === "Medium"
                  ? "text-yellow-500"
                  : "text-gray-600"
              }`}
            >
              {priority}
            </span>

          </div>

          <div className="flex items-center gap-2 mt-1.5">

            <p className="text-[11px] text-gray-600 truncate">
              {project}
            </p>

            <span className="text-gray-800">
              •
            </span>

            <p
              className={`text-[11px] ${
                status === "In Progress"
                  ? "text-blue-400"
                  : "text-gray-600"
              }`}
            >
              {status}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};


const ProgressRow = ({
  label,
  value,
  total,
}) => {

  const percentage =
    total > 0
      ? Math.round((value / total) * 100)
      : 0;

  return (
    <div>

      <div className="flex items-center justify-between mb-2">

        <span className="text-xs text-gray-400">
          {label}
        </span>

        <span className="text-xs text-gray-600">
          {value}
        </span>

      </div>

      <div className="h-1.5 bg-[#1c1c1c] rounded-full overflow-hidden">

        <div
          className="h-full bg-white rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>
  );
};


const UpcomingItem = ({
  title,
  project,
  date,
}) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#171717] transition">

      <div className="w-9 h-9 rounded-lg bg-[#1b1b1b]
                      border border-[#252525]
                      flex items-center justify-center">
        <CalendarDays
          size={16}
          className="text-gray-500"
        />
      </div>

      <div className="flex-1 min-w-0">

        <p className="text-sm text-gray-300 truncate">
          {title}
        </p>

        <p className="text-xs text-gray-600 mt-1 truncate">
          {project}
        </p>

      </div>

      <span className="text-xs text-gray-500 shrink-0">
        {date}
      </span>

    </div>
  );
};

export default Dashboard;