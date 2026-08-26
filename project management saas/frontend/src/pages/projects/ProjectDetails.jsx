import React, { useState } from "react";
import {
    ArrowLeft,
    Plus,
    UserPlus,
    ClipboardList,
    MoreHorizontal,
    CheckCircle2,
    Clock3,
    AlertCircle,
    Users,
    CalendarDays,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [showTaskModal, setShowTaskModal] = useState(false);
    const [showMemberModal, setShowMemberModal] = useState(false);

    // Temporary data — replace with your API data
    const project = {
        name: "Flowboard Website",
        description:
            "Build and launch the new Flowboard project management experience.",
        status: "In Progress",
        priority: "High",
        members: [
            {
                id: 1,
                name: "Divyanshu",
                email: "divyanshu@example.com",
                avatar: "D",
            },
            {
                id: 2,
                name: "Rahul",
                email: "rahul@example.com",
                avatar: "R",
            },
            {
                id: 3,
                name: "Aman",
                email: "aman@example.com",
                avatar: "A",
            },
        ],
        tasks: [
            {
                id: 1,
                title: "Create landing page",
                assignedTo: "Rahul",
                status: "completed",
                priority: "High",
            },
            {
                id: 2,
                title: "Build authentication",
                assignedTo: "Aman",
                status: "in-progress",
                priority: "High",
            },
            {
                id: 3,
                title: "Create dashboard",
                assignedTo: "Divyanshu",
                status: "pending",
                priority: "Medium",
            },
        ],
    };

    const getStatusIcon = (status) => {
        if (status === "completed") {
            return <CheckCircle2 size={16} />;
        }

        if (status === "in-progress") {
            return <Clock3 size={16} />;
        }

        return <AlertCircle size={16} />;
    };

    const getStatusText = (status) => {
        if (status === "completed") return "Completed";
        if (status === "in-progress") return "In Progress";
        return "Pending";
    };

    return (
        <div className="min-h-screen bg-[#090909] text-white px-6 py-6">

            {/* Back */}
            <button
                onClick={() => navigate("/projects")}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
            >
                <ArrowLeft size={18} />
                Back to Projects
            </button>

            {/* Project Header */}
            <div className="border border-white/10 bg-[#101010] rounded-2xl p-6 mb-6">

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <h1 className="text-3xl font-semibold">
                                {project.name}
                            </h1>

                            <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                {project.status}
                            </span>
                        </div>

                        <p className="text-gray-400 max-w-2xl">
                            {project.description}
                        </p>
                    </div>

                    {/* Main Actions */}
                    <div className="flex gap-3">

                        <button
                            onClick={() => setShowMemberModal(true)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                        >
                            <UserPlus size={17} />
                            Add Member
                        </button>

                        <button
                            onClick={() => setShowTaskModal(true)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
                        >
                            <Plus size={18} />
                            Assign Task
                        </button>

                    </div>

                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">

                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Total Tasks</p>
                        <p className="text-2xl font-semibold mt-1">
                            {project.tasks.length}
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Completed</p>
                        <p className="text-2xl font-semibold mt-1">
                            {
                                project.tasks.filter(
                                    (task) => task.status === "completed"
                                ).length
                            }
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Members</p>
                        <p className="text-2xl font-semibold mt-1">
                            {project.members.length}
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                        <p className="text-sm text-gray-500">Priority</p>
                        <p className="text-2xl font-semibold mt-1">
                            {project.priority}
                        </p>
                    </div>

                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Tasks */}
                <div className="xl:col-span-2">

                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-xl font-semibold">
                                Project Tasks
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Manage and assign tasks to your members.
                            </p>
                        </div>

                        <button
                            onClick={() => setShowTaskModal(true)}
                            className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                        >
                            <Plus size={16} />
                            New Task
                        </button>
                    </div>

                    <div className="space-y-3">

                        {project.tasks.map((task) => (

                            <div
                                key={task.id}
                                className="group bg-[#101010] border border-white/10 rounded-xl p-4 hover:border-white/20 transition"
                            >

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-4">

                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                            <ClipboardList
                                                size={18}
                                                className="text-gray-400"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-medium">
                                                {task.title}
                                            </h3>

                                            <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">

                                                <span>
                                                    Assigned to {task.assignedTo}
                                                </span>

                                                <span>•</span>

                                                <span
                                                    className={
                                                        task.priority === "High"
                                                            ? "text-red-400"
                                                            : "text-yellow-400"
                                                    }
                                                >
                                                    {task.priority}
                                                </span>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex items-center gap-4">

                                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                            {getStatusIcon(task.status)}
                                            {getStatusText(task.status)}
                                        </div>

                                        <button className="p-2 rounded-lg hover:bg-white/5">
                                            <MoreHorizontal size={18} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Members */}
                <div>

                    <div className="flex items-center justify-between mb-4">

                        <div>
                            <h2 className="text-xl font-semibold">
                                Members
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                People working on this project.
                            </p>
                        </div>

                        <button
                            onClick={() => setShowMemberModal(true)}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
                        >
                            <UserPlus size={17} />
                        </button>

                    </div>

                    <div className="bg-[#101010] border border-white/10 rounded-xl overflow-hidden">

                        {project.members.map((member, index) => (

                            <div
                                key={member.id}
                                className={`flex items-center justify-between p-4 ${
                                    index !== project.members.length - 1
                                        ? "border-b border-white/5"
                                        : ""
                                }`}
                            >

                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-medium">
                                        {member.avatar}
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium">
                                            {member.name}
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            {member.email}
                                        </p>
                                    </div>

                                </div>

                                <button className="p-2 rounded-lg hover:bg-white/5 text-gray-500">
                                    <MoreHorizontal size={17} />
                                </button>

                            </div>

                        ))}

                        <button
                            onClick={() => setShowMemberModal(true)}
                            className="w-full p-4 flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition"
                        >
                            <Plus size={16} />
                            Add project member
                        </button>

                    </div>

                </div>

            </div>

            {/* Assign Task Modal */}
            {showTaskModal && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

                    <div className="w-full max-w-lg bg-[#111111] border border-white/10 rounded-2xl p-6">

                        <div className="flex items-center justify-between mb-6">

                            <div>
                                <h2 className="text-xl font-semibold">
                                    Assign New Task
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Create a task and assign it to a project member.
                                </p>
                            </div>

                            <button
                                onClick={() => setShowTaskModal(false)}
                                className="text-gray-500 hover:text-white text-xl"
                            >
                                ×
                            </button>

                        </div>

                        <div className="space-y-4">

                            <div>
                                <label className="text-sm text-gray-400">
                                    Task title
                                </label>

                                <input
                                    type="text"
                                    placeholder="e.g. Build login page"
                                    className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">
                                    Description
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Describe the task..."
                                    className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30 resize-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">
                                    Assign to
                                </label>

                                <select className="w-full mt-2 bg-[#181818] border border-white/10 rounded-xl px-4 py-3 outline-none">
                                    <option value="">
                                        Select member
                                    </option>

                                    {project.members.map((member) => (
                                        <option
                                            key={member.id}
                                            value={member.id}
                                        >
                                            {member.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                <div>
                                    <label className="text-sm text-gray-400">
                                        Priority
                                    </label>

                                    <select className="w-full mt-2 bg-[#181818] border border-white/10 rounded-xl px-4 py-3 outline-none">
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-400">
                                        Status
                                    </label>

                                    <select className="w-full mt-2 bg-[#181818] border border-white/10 rounded-xl px-4 py-3 outline-none">
                                        <option>Pending</option>
                                        <option>In Progress</option>
                                        <option>Completed</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-end gap-3 mt-7">

                            <button
                                onClick={() => setShowTaskModal(false)}
                                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10"
                            >
                                Cancel
                            </button>

                            <button
                                className="px-5 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-gray-200"
                            >
                                Create Task
                            </button>

                        </div>

                    </div>

                </div>

            )}

            {/* Add Member Modal */}
            {showMemberModal && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

                    <div className="w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl p-6">

                        <div className="flex items-center justify-between mb-6">

                            <div>
                                <h2 className="text-xl font-semibold">
                                    Add Member
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Add a registered user to this project.
                                </p>
                            </div>

                            <button
                                onClick={() => setShowMemberModal(false)}
                                className="text-gray-500 hover:text-white text-xl"
                            >
                                ×
                            </button>

                        </div>

                        <div>
                            <label className="text-sm text-gray-400">
                                Member email
                            </label>

                            <input
                                type="email"
                                placeholder="member@example.com"
                                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"
                            />
                        </div>

                        <button
                            className="w-full mt-5 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
                        >
                            Add Member
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
};

export default ProjectDetails;