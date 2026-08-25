import { useState } from "react";
import { Users, Plus, X, ArrowLeft } from "lucide-react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const CreateTeam = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  // UI placeholder only
  const [members, setMembers] = useState([]);

  const addMember = () => {
    if (!email.trim()) return;

    setMembers([...members, email.trim()]);
    setEmail("");
    // console.log(email) 
  };

  const [teamName, setTeamName] = useState("")
  const addTeam = (e) => {
    // if (!teamName.trim()) return;
    setTeamName(e.target.value)
    
    // console.log(teamName)
  }
  

  const removeMember = (emailToRemove) => {
    setMembers(
      members.filter((member) => member !== emailToRemove)
    );
  };

  const createTeamAPI = async () => {
    try{
      const res = await axios.post("http://localhost:3000/teams/create", {
        name: teamName,
        members: members
      },{withCredentials: true})
      console.log(res)
      setTeamName("")
      setMembers([])
      navigate("/dashboard/teams")
      

    }catch(e){
      console.log(e)
    }
  };

  return (
    <div className="h-screen w-full bg-[#0b0b0b] text-white px-6 py-8 overflow-auto scrollbar-none">

      {/* Back */}
      <button
        onClick={() => navigate("/dashboard/teams")}
        className="
          flex items-center gap-2
          text-sm text-gray-500
          hover:text-white
          transition
          mb-8
        "
      >
        <ArrowLeft size={16} />
        Back to teams
      </button>

      {/* Main */}
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <div
            className="
              w-12 h-12
              rounded-xl
              bg-white/[0.06]
              border border-white/[0.07]
              flex items-center justify-center
              mb-4
            "
          >
            <Users size={21} className="text-gray-300" />
          </div>

          <h1 className="text-2xl font-semibold">
            Create a team
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Create a team and invite members to collaborate.
          </p>

        </div>

        {/* Form */}
        <div
          className="
            bg-[#111111]
            border border-white/[0.07]
            rounded-xl
            p-6
          "
        >

          {/* Team Name */}
          <div>
            <label className="text-sm text-gray-300">
              Team name
            </label>

            <input
              value={teamName}
              onChange={addTeam}
              type="text"
              placeholder="e.g. Frontend Team"
              className="
                w-full
                mt-2
                bg-[#0b0b0b]
                border border-white/[0.08]
                rounded-lg
                px-3.5 py-3
                text-sm
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-white/[0.2]
                transition
              "
            />
          </div>

          {/* Members */}
          <div className="mt-7">

            <div className="flex items-center justify-between">

              <label className="text-sm text-gray-300">
                Add members
              </label>

              <span className="text-xs text-gray-600">
                {members.length} members
              </span>

            </div>

            <div className="flex gap-2 mt-2">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addMember();
                  }
                }}
                placeholder="Enter registered user's email"
                className="
                  flex-1
                  bg-[#0b0b0b]
                  border border-white/[0.08]
                  rounded-lg
                  px-3.5 py-3
                  text-sm
                  text-white
                  placeholder:text-gray-600
                  outline-none
                  focus:border-white/[0.2]
                  transition
                "
              />

              <button
                onClick={addMember}
                className="
                  px-4
                  rounded-lg
                  bg-white/[0.06]
                  border border-white/[0.08]
                  text-gray-300
                  hover:bg-white/[0.1]
                  hover:text-white
                  transition
                "
              >
                <Plus size={18} />
              </button>

            </div>

            {/* Member List */}
            <div className="mt-4 space-y-2">

              {members.map((member) => (

                <div
                  key={member}
                  className="
                    flex items-center justify-between
                    px-3 py-2.5
                    rounded-lg
                    bg-white/[0.03]
                    border border-white/[0.05]
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-8 h-8
                        rounded-full
                        bg-white/[0.08]
                        flex items-center justify-center
                        text-xs
                        text-gray-400
                      "
                    >
                      {member.charAt(0).toUpperCase()}
                    </div>

                    <span className="text-sm text-gray-300">
                      {member}
                    </span>

                  </div>

                  <button
                    onClick={() => removeMember(member)}
                    className="
                      text-gray-600
                      hover:text-gray-300
                      transition
                    "
                  >
                    <X size={16} />
                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mt-7 pt-5">

            <button
            onClick={createTeamAPI}
              className="
                w-full
                bg-white
                text-black
                rounded-lg
                py-3
                text-sm
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              Create Team
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateTeam;