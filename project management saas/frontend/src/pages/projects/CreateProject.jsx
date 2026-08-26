import React from "react";
import { ArrowLeft, Plus, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const CreateProject = () => {
  const navigate = useNavigate();

  // Members state
  const [memberEmail, setMemberEmail] = useState("");
  const [members, setMembers] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Add member
  const addMember = () => {
    const email = memberEmail.trim();

    if (!email) return;

    // Prevent duplicate emails
    if (members.includes(email)) return;

    setMembers((prev) => [...prev, email]);
    setMemberEmail("");
  };

  // Remove member
  const removeMember = (emailToRemove) => {
    setMembers((prev) =>
      prev.filter((email) => email !== emailToRemove)
    );
  };

  const onSubmit = async (data) => {
    const { description, priority } = data;
    const name = data.projectName;

    console.log("FORM DATA:", data);

    const payload = {
      name,
      description,
      priority,
      members,
    };

    console.log("REQUEST PAYLOAD:", payload);

    try {
      const response = await axios.post(
        "http://localhost:3000/projects/create",
        payload,
        { withCredentials: true }
      );

      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("CREATE PROJECT ERROR:", error);
      console.error("SERVER RESPONSE:", error.response?.data);
    }
  };

  return (
    <div className="h-screen bg-[#0b0b0b] text-white px-6 py-8 overflow-auto scrollbar-none">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <NavLink
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition mb-8"
        >
          <ArrowLeft size={16} />
          Back to dashboard
        </NavLink>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create new project
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Set up a new project and start organizing your work.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">

          {/* Card Header */}
          <div className="px-6 py-5 border-b border-[#1f1f1f]">
            <h2 className="text-sm font-medium">
              Project details
            </h2>

            <p className="text-xs text-gray-600 mt-1">
              Basic information about your project
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6 space-y-6">

              {/* Project Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Project name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Website Redesign"
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border border-[#252525]
                    rounded-xl
                    px-4 py-3
                    text-sm text-white
                    placeholder:text-gray-700
                    outline-none
                    focus:border-[#3a3a3a]
                    transition
                  "
                  {...register("projectName")}
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Description
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe what this project is about..."
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border border-[#252525]
                    rounded-xl
                    px-4 py-3
                    text-sm text-white
                    placeholder:text-gray-700
                    outline-none
                    resize-none
                    focus:border-[#3a3a3a]
                    transition
                  "
                  {...register("description")}
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  priority
                </label>

                <select
                  {...register("priority")}
                  defaultValue="medium"
                  className="
                    w-full
                    bg-[#0b0b0b]
                    border border-[#252525]
                    rounded-xl
                    px-4 py-3
                    text-sm text-gray-300
                    outline-none
                    focus:border-[#3a3a3a]
                    transition
                  "
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              {/* Members */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <label className="block text-sm text-gray-300">
                      Members
                    </label>

                    <p className="text-xs text-gray-600 mt-1">
                      Add people who will work on this project
                    </p>
                  </div>
                </div>

                {/* Add member input */}
                <div className="flex gap-2 mb-3">
                  <input
                    type="email"
                    value={memberEmail}
                    onChange={(e) => setMemberEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addMember();
                      }
                    }}
                    placeholder="Enter member email"
                    className="
                      flex-1
                      bg-[#0b0b0b]
                      border border-[#252525]
                      rounded-xl
                      px-4 py-3
                      text-sm text-white
                      placeholder:text-gray-700
                      outline-none
                      focus:border-[#3a3a3a]
                      transition
                    "
                  />

                  <button
                    type="button"
                    onClick={addMember}
                    className="
                      w-12
                      rounded-xl
                      bg-[#1a1a1a]
                      border border-[#252525]
                      flex items-center justify-center
                      text-gray-400
                      hover:text-white
                      hover:bg-[#222222]
                      transition
                    "
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Owner */}
                <div className="flex items-center justify-between bg-[#0b0b0b] border border-[#252525] rounded-xl px-4 py-3 mb-2">

                  <div className="flex items-center gap-3">

                    <div className="w-8 h-8 rounded-full bg-[#1d1d1d] border border-[#2a2a2a] flex items-center justify-center text-xs">
                      DS
                    </div>

                    <div>
                      <p className="text-sm text-gray-300">
                        You
                      </p>

                      <p className="text-xs text-gray-600">
                        Owner
                      </p>
                    </div>

                  </div>

                  <span className="text-xs text-gray-600">
                    Owner
                  </span>

                </div>

                {/* Added members */}
                {members.map((email) => (
                  <div
                    key={email}
                    className="
                      flex items-center justify-between
                      bg-[#0b0b0b]
                      border border-[#252525]
                      rounded-xl
                      px-4 py-3
                      mb-2
                    "
                  >
                    <div className="flex items-center gap-3">

                      <div className="
                        w-8 h-8
                        rounded-full
                        bg-[#1d1d1d]
                        border border-[#2a2a2a]
                        flex items-center justify-center
                        text-xs
                        text-gray-400
                      ">
                        {email.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="text-sm text-gray-300">
                          {email}
                        </p>

                        <p className="text-xs text-gray-600">
                          Member
                        </p>
                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() => removeMember(email)}
                      className="
                        text-gray-600
                        hover:text-white
                        transition
                      "
                    >
                      <X size={16} />
                    </button>

                  </div>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#1f1f1f] bg-[#0f0f0f]">

              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="
                  px-4 py-2.5
                  rounded-xl
                  text-sm text-gray-500
                  hover:text-white
                  hover:bg-[#171717]
                  transition
                "
              >
                Cancel
              </button>

              <button
                type="submit"
                className="
                  flex items-center gap-2
                  px-5 py-2.5
                  rounded-xl
                  bg-white
                  text-black
                  text-sm font-medium
                  hover:bg-gray-200
                  transition
                "
              >
                <Plus size={16} />
                Create project
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default CreateProject;