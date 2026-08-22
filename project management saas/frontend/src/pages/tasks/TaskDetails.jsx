
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MoreHorizontal,
  Pencil,
  Trash2,
  User,
  FolderKanban,
  CheckCircle2,
  Circle,
  MessageSquare,
  Paperclip,
} from "lucide-react";

const TaskDetails = () => {
  return (
    <div className="h-screen bg-[#0b0b0b] text-white px-6 py-6 md:px-10 overflow-auto scrollbar-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition">
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Project</span>
        </button>

        <button className="p-2 rounded-lg hover:bg-[#171717] text-gray-400 hover:text-white transition">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Main Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
            In Progress
          </span>

          <span className="px-3 py-1 rounded-full text-xs bg-red-500/10 text-red-400 border border-red-500/20">
            High Priority
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Implement JWT Authentication
        </h1>

        <p className="text-gray-500 text-sm mt-2">Task #TASK-024</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Description */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-medium">Description</h2>

              <button className="text-gray-500 hover:text-white transition">
                <Pencil size={16} />
              </button>
            </div>

            <p className="text-gray-400 leading-7 text-sm">
              Implement JWT-based authentication for the application. Users
              should be able to register, login and remain authenticated using
              HTTP-only cookies.
            </p>
          </section>

          {/* Progress */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Progress</h2>

              <span className="text-sm text-gray-400">3 / 4 completed</span>
            </div>

            <div className="w-full h-2 bg-[#1c1c1c] rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-white rounded-full" />
            </div>

            <p className="text-xs text-gray-500 mt-3">75% completed</p>
          </section>

          {/* Subtasks */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-medium">Subtasks</h2>

              <button className="text-sm text-gray-400 hover:text-white transition">
                + Add
              </button>
            </div>

            <div className="space-y-3">
              {/* Completed */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#171717] transition">
                <CheckCircle2 size={18} className="text-gray-300" />

                <span className="text-sm text-gray-400 line-through">
                  Create JWT utility
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#171717] transition">
                <CheckCircle2 size={18} className="text-gray-300" />

                <span className="text-sm text-gray-400 line-through">
                  Create auth middleware
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#171717] transition">
                <CheckCircle2 size={18} className="text-gray-300" />

                <span className="text-sm text-gray-400 line-through">
                  Create login API
                </span>
              </div>

              {/* Pending */}
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#171717] transition">
                <Circle size={18} className="text-gray-600" />

                <span className="text-sm text-gray-300">
                  Test authentication flow
                </span>
              </div>
            </div>
          </section>

          {/* Activity */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <MessageSquare size={18} className="text-gray-400" />

              <h2 className="text-lg font-medium">Activity</h2>
            </div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-xs">
                  RS
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    Rahul Sharma changed the status to{" "}
                    <span className="text-white">In Progress</span>
                  </p>

                  <p className="text-xs text-gray-600 mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-xs">
                  DS
                </div>

                <div>
                  <p className="text-sm text-gray-300">
                    You assigned this task to Rahul Sharma
                  </p>

                  <p className="text-xs text-gray-600 mt-1">Yesterday</p>
                </div>
              </div>
            </div>

            {/* Comment */}
            <div className="mt-6 pt-5 border-t border-[#1f1f1f]">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-[#3a3a3a]"
                />

                <button className="px-4 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* Task Details */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">
            <h2 className="text-sm font-medium mb-5">Task Details</h2>

            <div className="space-y-5">
              {/* Assignee */}
              <div>
                <p className="text-xs text-gray-600 mb-2">Assigned To</p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1c1c1c] flex items-center justify-center">
                    <User size={16} className="text-gray-400" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-300">Rahul Sharma</p>

                    <p className="text-xs text-gray-600">Backend Developer</p>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <p className="text-xs text-gray-600 mb-2">Status</p>

                <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#171717] border border-[#242424] text-sm">
                  <span className="text-blue-400">In Progress</span>

                  <MoreHorizontal size={15} className="text-gray-600" />
                </button>
              </div>

              {/* Priority */}
              <div>
                <p className="text-xs text-gray-600 mb-2">Priority</p>

                <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#171717] border border-[#242424] text-sm">
                  <span className="text-red-400">High</span>

                  <MoreHorizontal size={15} className="text-gray-600" />
                </button>
              </div>

              {/* Project */}
              <div>
                <p className="text-xs text-gray-600 mb-2">Project</p>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <FolderKanban size={16} className="text-gray-500" />
                  Flowboard Backend
                </div>
              </div>

              {/* Due Date */}
              <div>
                <p className="text-xs text-gray-600 mb-2">Due Date</p>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CalendarDays size={16} className="text-gray-500" />
                  Aug 25, 2026
                </div>
              </div>

              {/* Created */}
              <div>
                <p className="text-xs text-gray-600 mb-2">Created</p>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock3 size={16} className="text-gray-500" />
                  Aug 18, 2026
                </div>
              </div>
            </div>
          </section>

          {/* Attachments */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Paperclip size={16} className="text-gray-500" />

                <h2 className="text-sm font-medium">Attachments</h2>
              </div>

              <button className="text-xs text-gray-500 hover:text-white">
                + Add
              </button>
            </div>

            <div className="text-sm text-gray-600">No attachments yet.</div>
          </section>

          {/* Danger Zone */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">
            <h2 className="text-sm font-medium mb-4">Actions</h2>

            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-red-500/20 text-red-400 text-sm hover:bg-red-500/5 transition">
              <Trash2 size={15} />
              Delete Task
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
