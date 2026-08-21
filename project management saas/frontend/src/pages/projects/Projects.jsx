import React from "react";
import {
  ArrowLeft,
  MoreHorizontal,
  Pencil,
  CalendarDays,
  Users,
  CheckCircle2,
  Clock3,
  Circle,
  Plus,
  ListTodo,
  User,
  Trash2,
} from "lucide-react";

const ProjectDetails = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-6 md:px-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <button className="flex items-center gap-2 text-gray-500 hover:text-white transition">
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Projects</span>
        </button>

        <button className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-[#171717] transition">
          <MoreHorizontal size={20} />
        </button>

      </div>


      {/* Project Header */}
      <div className="mb-8">

        <div className="flex flex-wrap items-center gap-3 mb-4">

          <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
            In Progress
          </span>

          <span className="text-xs text-gray-600">
            Project #PRJ-024
          </span>

        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

          <div>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Flowboard Backend
            </h1>

            <p className="text-gray-500 text-sm mt-2 max-w-2xl leading-6">
              Building the backend infrastructure and APIs for the
              Flowboard project management application.
            </p>

          </div>

          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            <Pencil size={15} />
            Edit Project
          </button>

        </div>

      </div>


      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        <StatCard
          icon={<ListTodo size={17} />}
          label="Total Tasks"
          value="24"
        />

        <StatCard
          icon={<Clock3 size={17} />}
          label="In Progress"
          value="8"
        />

        <StatCard
          icon={<CheckCircle2 size={17} />}
          label="Completed"
          value="12"
        />

        <StatCard
          icon={<Users size={17} />}
          label="Members"
          value="6"
        />

      </div>


      {/* Main Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">


        {/* LEFT */}
        <div className="space-y-6">


          {/* Progress */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">

            <div className="flex items-center justify-between mb-4">

              <div>
                <h2 className="text-lg font-medium">
                  Project Progress
                </h2>

                <p className="text-xs text-gray-600 mt-1">
                  Overall completion of this project
                </p>
              </div>

              <span className="text-lg font-medium">
                50%
              </span>

            </div>

            <div className="w-full h-2 bg-[#1c1c1c] rounded-full overflow-hidden">
              <div className="h-full w-[50%] bg-white rounded-full" />
            </div>

            <div className="flex justify-between mt-3">

              <span className="text-xs text-gray-600">
                12 of 24 tasks completed
              </span>

              <span className="text-xs text-gray-600">
                50%
              </span>

            </div>

          </section>


          {/* Tasks */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl">

            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f1f]">

              <div>
                <h2 className="text-lg font-medium">
                  Tasks
                </h2>

                <p className="text-xs text-gray-600 mt-1">
                  Tasks belonging to this project
                </p>
              </div>

              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                <Plus size={16} />
                Add Task
              </button>

            </div>


            {/* Task List */}
            <div className="divide-y divide-[#1f1f1f]">

              <TaskRow
                title="Implement JWT Authentication"
                status="In Progress"
                priority="High"
                assignee="RS"
              />

              <TaskRow
                title="Create Project API"
                status="Done"
                priority="Medium"
                assignee="DS"
                completed
              />

              <TaskRow
                title="Build Task API"
                status="In Progress"
                priority="High"
                assignee="RS"
              />

              <TaskRow
                title="Implement Role Based Access"
                status="Todo"
                priority="Medium"
                assignee="AK"
              />

              <TaskRow
                title="Write API Documentation"
                status="Todo"
                priority="Low"
                assignee="DS"
              />

            </div>

            <div className="px-6 py-4 border-t border-[#1f1f1f]">

              <button className="text-sm text-gray-500 hover:text-white transition">
                View all tasks →
              </button>

            </div>

          </section>


          {/* Recent Activity */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">

            <h2 className="text-lg font-medium mb-5">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <Activity
                initials="RS"
                text="Rahul moved"
                highlight="Implement JWT Authentication"
                action="to In Progress"
                time="2 hours ago"
              />

              <Activity
                initials="DS"
                text="You completed"
                highlight="Create Project API"
                action=""
                time="5 hours ago"
              />

              <Activity
                initials="AK"
                text="Aman was assigned to"
                highlight="Implement Role Based Access"
                action=""
                time="Yesterday"
              />

              <Activity
                initials="DS"
                text="You created"
                highlight="Write API Documentation"
                action=""
                time="Yesterday"
              />

            </div>

          </section>

        </div>


        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">


          {/* Project Details */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">

            <h2 className="text-sm font-medium mb-5">
              Project Details
            </h2>

            <div className="space-y-5">

              {/* Status */}
              <DetailItem
                label="Status"
                value={
                  <span className="text-blue-400">
                    In Progress
                  </span>
                }
              />

              {/* Owner */}
              <DetailItem
                label="Owner"
                value={
                  <div className="flex items-center gap-2">

                    <div className="w-7 h-7 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[10px]">
                      DS
                    </div>

                    <span>
                      Divyanshu Shah
                    </span>

                  </div>
                }
              />

              {/* Created */}
              <DetailItem
                label="Created"
                value={
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-gray-600" />
                    Aug 18, 2026
                  </div>
                }
              />

              {/* Deadline */}
              <DetailItem
                label="Deadline"
                value={
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-gray-600" />
                    Sep 10, 2026
                  </div>
                }
              />

              {/* Tasks */}
              <DetailItem
                label="Tasks"
                value="24"
              />

            </div>

          </section>


          {/* Members */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-sm font-medium">
                Members
              </h2>

              <button className="text-xs text-gray-500 hover:text-white">
                + Add
              </button>

            </div>

            <div className="space-y-4">

              <Member
                initials="DS"
                name="Divyanshu Shah"
                role="Owner"
              />

              <Member
                initials="RS"
                name="Rahul Sharma"
                role="Backend"
              />

              <Member
                initials="AK"
                name="Aman Kumar"
                role="Frontend"
              />

              <Member
                initials="PS"
                name="Priya Singh"
                role="Designer"
              />

            </div>

            <button className="w-full mt-5 text-xs text-gray-500 hover:text-white transition">
              View all members
            </button>

          </section>


          {/* Quick Actions */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">

            <h2 className="text-sm font-medium mb-4">
              Quick Actions
            </h2>

            <div className="space-y-2">

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#171717] transition">
                <ListTodo size={16} />
                Open Kanban Board
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-[#171717] transition">
                <Users size={16} />
                Manage Members
              </button>

              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:bg-red-500/5 transition">
                <Trash2 size={16} />
                Delete Project
              </button>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
};


/* ---------------- Components ---------------- */

const StatCard = ({ icon, label, value }) => {
  return (
    <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">

      <div className="flex items-center gap-2 text-gray-600 mb-3">
        {icon}

        <span className="text-xs">
          {label}
        </span>
      </div>

      <p className="text-2xl font-semibold">
        {value}
      </p>

    </div>
  );
};


const TaskRow = ({
  title,
  status,
  priority,
  assignee,
  completed,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-4 hover:bg-[#151515] transition cursor-pointer">

      <div className="flex items-center gap-3 min-w-0">

        {completed ? (
          <CheckCircle2
            size={18}
            className="text-gray-500 shrink-0"
          />
        ) : (
          <Circle
            size={18}
            className="text-gray-700 shrink-0"
          />
        )}

        <span
          className={`text-sm truncate ${
            completed
              ? "text-gray-600 line-through"
              : "text-gray-300"
          }`}
        >
          {title}
        </span>

      </div>

      <div className="flex items-center gap-4 pl-7 md:pl-0">

        <span
          className={`text-xs ${
            status === "Done"
              ? "text-gray-500"
              : status === "In Progress"
              ? "text-blue-400"
              : "text-gray-600"
          }`}
        >
          {status}
        </span>

        <span
          className={`text-xs ${
            priority === "High"
              ? "text-red-400"
              : priority === "Medium"
              ? "text-yellow-500"
              : "text-gray-600"
          }`}
        >
          {priority}
        </span>

        <div className="w-7 h-7 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[10px] text-gray-400">
          {assignee}
        </div>

      </div>

    </div>
  );
};


const Activity = ({
  initials,
  text,
  highlight,
  action,
  time,
}) => {
  return (
    <div className="flex gap-3">

      <div className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[10px] text-gray-400 shrink-0">
        {initials}
      </div>

      <div>

        <p className="text-sm text-gray-400">
          {text}{" "}
          <span className="text-gray-200">
            {highlight}
          </span>{" "}
          {action}
        </p>

        <p className="text-xs text-gray-700 mt-1">
          {time}
        </p>

      </div>

    </div>
  );
};


const DetailItem = ({ label, value }) => {
  return (
    <div>

      <p className="text-xs text-gray-600 mb-2">
        {label}
      </p>

      <div className="text-sm text-gray-300">
        {value}
      </div>

    </div>
  );
};


const Member = ({ initials, name, role }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="w-9 h-9 rounded-full bg-[#1c1c1c] flex items-center justify-center text-xs text-gray-400">
        {initials}
      </div>

      <div className="flex-1 min-w-0">

        <p className="text-sm text-gray-300 truncate">
          {name}
        </p>

        <p className="text-xs text-gray-600">
          {role}
        </p>

      </div>

      <User size={14} className="text-gray-700" />

    </div>
  );
};

export default ProjectDetails;