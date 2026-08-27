import { X, Plus } from "lucide-react";
import useTasks from "../../components/hooks/useTasks";




function AddTaskForm({ onClose, id }) {
    const { showAddTaskCard, setShowAddTaskCard, createTask } = useTasks()
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="w-[420px] rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Create Task
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Add a new task to this project
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4">

                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-400">
                            Task title
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. Build authentication"
                            className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/25"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-400">
                            Description
                        </label>

                        <textarea
                            rows="3"
                            placeholder="Describe the task..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/25"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm text-gray-400">
                            Assign to
                        </label>

                        <input
                            type="email"
                            placeholder="member@email.com"
                            className="w-full rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/25"
                        />
                    </div>

                    {/* Status + Priority */}
                    <div className="grid grid-cols-2 gap-3">

                        <div>
                            <label className="mb-2 block text-sm text-gray-400">
                                Status
                            </label>

                            <select
                                className="w-full rounded-xl border border-white/10 bg-[#181818] px-3 py-3 text-sm text-gray-300 outline-none"
                            >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="overdue">Overdue</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-gray-400">
                                Priority
                            </label>

                            <select
                                className="w-full rounded-xl border border-white/10 bg-[#181818] px-3 py-3 text-sm text-gray-300 outline-none"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-xl border border-white/10 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/5 hover:text-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                        >
                            <Plus size={17} />
                            Create Task
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddTaskForm;