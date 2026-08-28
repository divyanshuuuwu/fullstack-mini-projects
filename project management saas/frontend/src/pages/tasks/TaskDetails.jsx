import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Calendar,
  Folder,
  X,
  ChevronDown,
  Circle,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Tasks = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("all");

  // Temporary data — later replace this with your API data
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "Design login and register pages",
      description:
        "Create the login and registration pages for the Flowboard application.",
      project: "Flowboard",
      status: "pending",
      priority: "high",
      dueDate: "Aug 30",
    },
    {
      _id: "2",
      title: "Fix sidebar responsiveness",
      description:
        "Make the sidebar responsive for tablet and mobile screen sizes.",
      project: "Flowboard",
      status: "in-progress",
      priority: "medium",
      dueDate: "Sep 01",
    },
    {
      _id: "3",
      title: "Create authentication middleware",
      description:
        "Implement JWT authentication middleware on the backend.",
      project: "Flowboard",
      status: "in-progress",
      priority: "high",
      dueDate: "Sep 02",
    },
    {
      _id: "4",
      title: "Create team settings page",
      description:
        "Build the team settings page where members can manage their team.",
      project: "Flowboard",
      status: "pending",
      priority: "low",
      dueDate: "Sep 05",
    },
    {
      _id: "5",
      title: "Write API documentation",
      description:
        "Document the project and task APIs for future development.",
      project: "Flowboard",
      status: "completed",
      priority: "low",
      dueDate: "Aug 25",
    },
  ]);

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    );

    setSelectedTask((prev) =>
      prev ? { ...prev, status: newStatus } : null
    );

    // Later:
    // axios.patch(`/tasks/update/${taskId}`, {
    //   status: newStatus
    // });
  };

  const getPriorityStyle = (priority) => {
    if (priority === "high") {
      return "text-red-400 bg-red-500/10 border-red-500/20";
    }

    if (priority === "medium") {
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    }

    return "text-green-400 bg-green-500/10 border-green-500/20";
  };

  const getStatusIcon = (status) => {
    if (status === "completed") {
      return <CheckCircle2 size={17} />;
    }

    if (status === "in-progress") {
      return <Clock3 size={17} />;
    }

    return <Circle size={17} />;
  };

  const getStatusName = (status) => {
    if (status === "in-progress") return "In Progress";
    if (status === "completed") return "Completed";
    return "To Do";
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* MAIN CONTENT */}
      <div className="p-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold">My Tasks</h1>

            <p className="text-gray-500 mt-1">
              Tasks assigned to you across all projects.
            </p>
          </div>

          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <div className="flex items-center gap-2 bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 w-64">
              <Search size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search tasks..."
                className="bg-transparent outline-none text-sm w-full placeholder:text-gray-600"
              />
            </div>

            {/* FILTER */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-[#161616]">
              <SlidersHorizontal size={17} />
              Filter
              <ChevronDown size={15} />
            </button>
          </div>
        </div>

        {/* STATUS FILTERS */}
        <div className="flex gap-8 border-b border-white/10 mb-7">

          <button
            onClick={() => setFilter("all")}
            className={`pb-4 text-sm ${
              filter === "all"
                ? "text-white border-b-2 border-purple-500"
                : "text-gray-500"
            }`}
          >
            All
            <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">
              {tasks.length}
            </span>
          </button>

          <button
            onClick={() => setFilter("pending")}
            className={`pb-4 text-sm ${
              filter === "pending"
                ? "text-white border-b-2 border-purple-500"
                : "text-gray-500"
            }`}
          >
            To Do
          </button>

          <button
            onClick={() => setFilter("in-progress")}
            className={`pb-4 text-sm ${
              filter === "in-progress"
                ? "text-white border-b-2 border-purple-500"
                : "text-gray-500"
            }`}
          >
            In Progress
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`pb-4 text-sm ${
              filter === "completed"
                ? "text-white border-b-2 border-purple-500"
                : "text-gray-500"
            }`}
          >
            Completed
          </button>
        </div>

        {/* TASK LIST */}
        <div className="max-w-5xl space-y-3">

          {filteredTasks.length === 0 && (
            <div className="py-20 text-center text-gray-600">
              <CheckCircle2
                size={40}
                className="mx-auto mb-3 opacity-50"
              />

              <p>No tasks found</p>
            </div>
          )}

          {filteredTasks.map((task) => (
            <div
              key={task._id}
              onClick={() => setSelectedTask(task)}
              className={`group cursor-pointer border rounded-xl p-5 transition-all
                ${
                  selectedTask?._id === task._id
                    ? "border-purple-500/70 bg-[#111]"
                    : "border-white/10 bg-[#0d0d0d] hover:border-white/20 hover:bg-[#111]"
                }
              `}
            >
              <div className="flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  {/* STATUS CIRCLE */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center
                    ${
                      task.status === "completed"
                        ? "text-green-400 bg-green-500/10"
                        : task.status === "in-progress"
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-gray-500 bg-white/5"
                    }`}
                  >
                    {getStatusIcon(task.status)}
                  </div>

                  <div>
                    <h3 className="font-medium text-white">
                      {task.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <Folder size={13} />
                      {task.project}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5">

                  {/* PRIORITY */}
                  <span
                    className={`px-3 py-1.5 rounded-full border text-xs capitalize ${getPriorityStyle(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>

                  {/* DATE */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} />
                    {task.dueDate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TASK DETAILS DRAWER */}
      {selectedTask && (
        <div className="fixed inset-y-0 right-0 w-[420px] bg-[#0c0c0c] border-l border-white/10 shadow-2xl z-50">

          {/* DRAWER HEADER */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">

            <span className="text-sm text-gray-500">
              Task Details
            </span>

            <button
              onClick={() => setSelectedTask(null)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 overflow-y-auto h-[calc(100vh-73px)]">

            {/* TITLE */}
            <h2 className="text-2xl font-semibold leading-tight">
              {selectedTask.title}
            </h2>

            {/* PROJECT + PRIORITY */}
            <div className="flex items-center gap-3 mt-4">

              <div className="flex items-center gap-2 text-sm text-purple-400">
                <Folder size={15} />
                {selectedTask.project}
              </div>

              <span
                className={`px-3 py-1 rounded-full border text-xs capitalize ${getPriorityStyle(
                  selectedTask.priority
                )}`}
              >
                {selectedTask.priority} priority
              </span>
            </div>

            {/* STATUS */}
            <div className="mt-8">

              <label className="block text-sm text-gray-400 mb-2">
                Status
              </label>

              <div className="relative">

                <select
                  value={selectedTask.status}
                  onChange={(e) =>
                    updateTaskStatus(
                      selectedTask._id,
                      e.target.value
                    )
                  }
                  className="w-full appearance-none bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-purple-500"
                >
                  <option value="pending">
                    To Do
                  </option>

                  <option value="in-progress">
                    In Progress
                  </option>

                  <option value="completed">
                    Completed
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="absolute right-4 top-3.5 text-gray-500 pointer-events-none"
                />
              </div>
            </div>

            {/* DUE DATE */}
            <div className="mt-6">

              <label className="block text-sm text-gray-400 mb-2">
                Due Date
              </label>

              <div className="flex items-center gap-3 bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300">
                <Calendar size={17} className="text-gray-500" />
                {selectedTask.dueDate}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-6">

              <label className="block text-sm text-gray-400 mb-2">
                Description
              </label>

              <div className="bg-[#151515] border border-white/10 rounded-lg p-4 text-sm text-gray-400 leading-relaxed">
                {selectedTask.description}
              </div>
            </div>

            {/* CURRENT STATUS */}
            <div className="mt-8">

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <AlertCircle size={16} />
                Current Status
              </div>

              <div className="flex items-center gap-3 bg-[#151515] rounded-lg p-4">

                <div
                  className={`w-3 h-3 rounded-full ${
                    selectedTask.status === "completed"
                      ? "bg-green-400"
                      : selectedTask.status === "in-progress"
                      ? "bg-purple-400"
                      : "bg-gray-500"
                  }`}
                />

                <span className="text-sm">
                  {getStatusName(selectedTask.status)}
                </span>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="mt-8">

              <p className="text-sm text-gray-400 mb-3">
                Quick Update
              </p>

              <div className="grid grid-cols-3 gap-2">

                <button
                  onClick={() =>
                    updateTaskStatus(
                      selectedTask._id,
                      "pending"
                    )
                  }
                  className="py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs"
                >
                  To Do
                </button>

                <button
                  onClick={() =>
                    updateTaskStatus(
                      selectedTask._id,
                      "in-progress"
                    )
                  }
                  className="py-2.5 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 text-xs"
                >
                  In Progress
                </button>

                <button
                  onClick={() =>
                    updateTaskStatus(
                      selectedTask._id,
                      "completed"
                    )
                  }
                  className="py-2.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 text-xs"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* BACKDROP */}
      {selectedTask && (
        <div
          onClick={() => setSelectedTask(null)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </div>
  );
};

export default Tasks;