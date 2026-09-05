import {
  Users,
  Plus,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import TeamCard from "./TeamCard";

import useTeam from "../../components/hooks/useTeam";
import { useEffect, useContext } from "react";





const MyTeams = () => {

    const {getTeams, teams} = useTeam()
useEffect(()=> {
    getTeams()
},[])



  return (
    <div className="h-screen bg-[#0b0b0b] text-white px-6 py-8 overflow-auto scrollbar-none">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-2xl font-semibold">
            My Teams
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your teams and collaborate with your members.
          </p>
        </div>

       <NavLink
            to="/dashboard/createteam"
            className="inline-flex items-center justify-center gap-2
                       bg-white text-black px-4 py-2.5 rounded-lg
                       text-sm font-medium
                       hover:bg-gray-200 transition"
          >
            <Plus size={17} />
            Create Team
          </NavLink>

      </div>

      {/* Teams */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* Team Card */}
        
        {teams.map((team) => (
                <TeamCard
                    key={team._id}
                    team={team}
                />
            ))} 

      </div>

    </div>
  );
};

export default MyTeams;