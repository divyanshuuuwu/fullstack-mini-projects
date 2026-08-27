import React from "react";
import {
  ArrowLeft,
  CalendarDays,
  MoreHorizontal,
  Users,
  UserPlus,
  Plus,
  Circle,
  Clock3,
  CheckCircle2,
  AlertCircle,
  ListTodo,
  UserRound,
} from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import useProjects from "../../components/hooks/useProjects";
import {useEffect} from "react"
import useTasks from "../../components/hooks/useTasks";

const SingleProject = () => {
  const { id } = useParams();

  const { projectbyId, getProjectById } = useProjects()
  const { taskbyId, getTaskById } = useTasks()

  useEffect(() => {
    getProjectById(id)
  }, [])

  useEffect(() => {
    getTaskById(id)
  }, [])

  const project = projectbyId
  const tasks = taskbyId || [];
  const members = project.members || [];

//   const members = [
//     {
//       id: 1,
//       name: "Divyanshu",
//       email: "divyanshu@example.com",
//       role: "Owner",
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       email: "rahul@example.com",
//       role: "Member",
//     },
//     {
//       id: 3,
//       name: "Aman",
//       email: "aman@example.com",
//       role: "Member",
//     },
//   ];

//   const tasks = [
//     {
//       id: 1,
//       title: "Create dashboard UI",
//       assignedTo: "Rahul",
//       status: "completed",
//       priority: "high",
//     },
//     {
//       id: 2,
//       title: "Implement authentication",
//       assignedTo: "Aman",
//       status: "in-progress",
//       priority: "high",
//     },
//     {
//       id: 3,
//       title: "Create task assignment API",
//       assignedTo: "Divyanshu",
//       status: "pending",
//       priority: "medium",
//     },
//   ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 size={14} />;

      case "in-progress":
        return <Clock3 size={14} />;

      case "overdue":
        return <AlertCircle size={14} />;

      default:
        return <Circle size={14} />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "completed":
        return "Completed";

      case "in-progress":
        return "In Progress";

      case "overdue":
        return "Overdue";

      default:
        return "Pending";
    }
  };

  return (
    <div className="h-screen bg-[#0b0b0b] text-white p-6 lg:p-8 overflow-auto scrollbar-none">

      {/* Back */}
      <NavLink
        to="/projects"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          text-gray-500
          hover:text-white
          transition
          mb-7
        "
      >
        <ArrowLeft size={16} />
        Back to Projects
      </NavLink>


      {/* ================= HEADER ================= */}

      <div className="
        flex
        flex-col
        lg:flex-row
        lg:items-start
        lg:justify-between
        gap-6
        mb-8
      ">

        <div className="flex items-start gap-4">

          {/* Project Icon */}
          <div className="
            w-14
            h-14
            rounded-2xl
            bg-[#171717]
            border
            border-[#292929]
            flex
            items-center
            justify-center
            shrink-0
          ">
            <ListTodo
              size={25}
              className="text-gray-400"
            />
          </div>

          <div>

            <div className="
              flex
              items-center
              gap-3
              flex-wrap
            ">
              <h1 className="
                text-2xl
                lg:text-3xl
                font-semibold
                tracking-tight
              ">
                {project.name}
              </h1>

              {/* Status */}
              <span className="
                inline-flex
                items-center
                gap-1.5
                px-2.5
                py-1
                rounded-lg
                bg-[#181818]
                border
                border-[#292929]
                text-xs
                text-gray-400
              ">
                {getStatusIcon(project.status)}
                {getStatusLabel(project.status)}
              </span>
            </div>

            <p className="
              text-sm
              text-gray-500
              mt-2
              max-w-2xl
              leading-6
            ">
              {project.description}
            </p>

            <div className="
              flex
              items-center
              gap-4
              mt-4
              text-xs
              text-gray-600
            ">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                Created {project.createdAt}
              </span>

              <span className="capitalize">
                {project.priority} priority
              </span>
            </div>

          </div>
        </div>


        {/* Header Actions */}

        <div className="flex items-center gap-2">

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-white
              text-black
              text-sm
              font-medium
              hover:bg-gray-200
              transition
            "
          >
            <Plus size={16} />
            Add Task
          </button>

          <button
            className="
              p-2.5
              rounded-xl
              bg-[#151515]
              border
              border-[#292929]
              text-gray-500
              hover:text-white
              hover:border-[#3a3a3a]
              transition
            "
          >
            <MoreHorizontal size={18} />
          </button>

        </div>

      </div>


      {/* ================= STATS ================= */}

      <div className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4
        mb-8
      ">

        <div className="
          bg-[#111111]
          border
          border-[#1f1f1f]
          rounded-2xl
          p-5
        ">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">
              Total Tasks
            </span>

            <ListTodo
              size={16}
              className="text-gray-700"
            />
          </div>

          <p className="text-2xl font-semibold mt-3">
            {tasks.length}
          </p>
        </div>


        <div className="
          bg-[#111111]
          border
          border-[#1f1f1f]
          rounded-2xl
          p-5
        ">
          <span className="text-xs text-gray-600">
            Completed
          </span>

          <p className="text-2xl font-semibold mt-3">
            {
              tasks.filter(
                (task) => task.status === "completed"
              ).length
            }
          </p>
        </div>


        <div className="
          bg-[#111111]
          border
          border-[#1f1f1f]
          rounded-2xl
          p-5
        ">
          <span className="text-xs text-gray-600">
            In Progress
          </span>

          <p className="text-2xl font-semibold mt-3">
            {
              tasks.filter(
                (task) => task.status === "in-progress"
              ).length
            }
          </p>
        </div>


        <div className="
          bg-[#111111]
          border
          border-[#1f1f1f]
          rounded-2xl
          p-5
        ">
          <div className="flex items-center justify-between">

            <span className="text-xs text-gray-600">
              Members
            </span>

            <Users
              size={16}
              className="text-gray-700"
            />

          </div>

          <p className="text-2xl font-semibold mt-3">
            {members.length}
          </p>
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-[1fr_340px]
        gap-6
      ">


        {/* ================= TASKS ================= */}

        <div className="
          bg-[#111111]
          border
          border-[#1f1f1f]
          rounded-2xl
          overflow-hidden
        ">

          {/* Task Header */}

          <div className="
            px-5
            py-4
            border-b
            border-[#1f1f1f]
            flex
            items-center
            justify-between
          ">

            <div>
              <h2 className="
                text-sm
                font-medium
                text-gray-200
              ">
                Tasks
              </h2>

              <p className="
                text-xs
                text-gray-600
                mt-1
              ">
                Manage tasks for this project
              </p>
            </div>

            <button
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-lg
                bg-[#181818]
                border
                border-[#292929]
                text-xs
                text-gray-400
                hover:text-white
                transition
              "
            >
              <Plus size={14} />
              New Task
            </button>

          </div>


          {/* Task List */}

          <div className="divide-y divide-[#1c1c1c]">

            {tasks.map((task) => (

              <div
                key={task._id}
                className="
                  p-5
                  flex
                  items-center
                  justify-between
                  gap-4
                  hover:bg-[#141414]
                  transition
                "
              >

                <div className="
                  flex
                  items-center
                  gap-4
                  min-w-0
                ">

                  <div className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#181818]
                    border
                    border-[#292929]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  ">
                    {getStatusIcon(task.status)}
                  </div>

                  <div className="min-w-0">

                    <h3 className="
                      text-sm
                      text-gray-300
                      truncate
                    ">
                      {task.title}
                    </h3>

                    <div className="
                      flex
                      items-center
                      gap-3
                      mt-1.5
                    ">

                      <span className="text-[11px] text-gray-600">
                        Assigned to {task.assignedTo?.name || "Unassigned"}
                        </span>

                      <span className="
                        text-[11px]
                        text-gray-700
                        capitalize
                      ">
                        {task.priority}
                      </span>

                    </div>

                  </div>

                </div>


                <span className="
                  hidden
                  sm:inline-flex
                  items-center
                  gap-1.5
                  px-2.5
                  py-1
                  rounded-lg
                  bg-[#181818]
                  border
                  border-[#292929]
                  text-[11px]
                  text-gray-500
                  whitespace-nowrap
                ">
                  {getStatusIcon(task.status)}
                  {getStatusLabel(task.status)}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* ================= MEMBERS ================= */}

        <div className="
          bg-[#111111]
          border
          border-[#1f1f1f]
          rounded-2xl
          overflow-hidden
          h-fit
        ">

          {/* Members Header */}

          <div className="
            px-5
            py-4
            border-b
            border-[#1f1f1f]
            flex
            items-center
            justify-between
          ">

            <div>

              <h2 className="
                text-sm
                font-medium
                text-gray-200
              ">
                Members
              </h2>

              <p className="
                text-xs
                text-gray-600
                mt-1
              ">
                {members.length} people in this project
              </p>

            </div>

            <button
              className="
                p-2
                rounded-lg
                bg-[#181818]
                border
                border-[#292929]
                text-gray-500
                hover:text-white
                transition
              "
            >
              <UserPlus size={15} />
            </button>

          </div>


          {/* Members List */}

          <div className="p-3">

            {members.map((member) => (

              <div
                key={member._id}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-[#171717]
                  transition
                "
              >

                {/* Avatar */}

                <div className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#202020]
                  border
                  border-[#303030]
                  flex
                  items-center
                  justify-center
                  text-xs
                  text-gray-400
                  shrink-0
                ">
                  {member.name.charAt(0)}
                </div>


                <div className="min-w-0 flex-1">

                  <p className="
                    text-sm
                    text-gray-300
                    truncate
                  ">
                    {member.name}
                  </p>

                  <p className="
                    text-[11px]
                    text-gray-600
                    truncate
                  ">
                    {member.email}
                  </p>

                </div>


                <span className="
                  text-[10px]
                  text-gray-600
                  capitalize
                ">
                  {member.role}
                </span>

              </div>

            ))}

          </div>


          {/* Add Member */}

          <div className="
            p-4
            border-t
            border-[#1f1f1f]
          ">

            <button
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                py-2.5
                rounded-xl
                bg-[#181818]
                border
                border-[#292929]
                text-xs
                text-gray-400
                hover:text-white
                hover:border-[#3a3a3a]
                transition
              "
            >
              <UserPlus size={14} />
              Add Member
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SingleProject;