import  { useEffect } from "react";
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

import StateCard from "../../components/ui/StateCard";
import StatusBadge from "../../components/ui/StatusBadge";
import TaskItem from "../../components/ui/TaskItem";


import useAuth from "../../components/hooks/useAuth";
import useProjects from "../../components/hooks/useProjects";
import BottomSection from "./BottomSection";
import MainContent from "./MainContent";


const Dashboard = () => {
  const { user } = useAuth();
  const { projects, getProjects } = useProjects();


  const recentProjects = [...(projects || [])]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

 

  useEffect(() => {
    getProjects();
    
  }, []);

  const totalProjects = projects?.length || 0;

  const completedProjects =
    projects?.filter((project) => project.status === "completed").length || 0;

  const inProgressProjects =
    projects?.filter((project) => project.status === "in-progress").length || 0;

  const pendingProjects =
    projects?.filter((project) => project.status === "pending").length || 0;

  const overdueProjects =
    projects?.filter((project) => project.status === "overdue").length || 0;

  return (
    <div className="h-screen w-full bg-[#0b0b0b] text-white px-6 py-6 md:px-10 overflow-auto scrollbar-none">
      <div className="max-w-375 mx-auto">
        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">Dashboard</p>

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
          <StateCard
            icon={<FolderKanban size={17} />}
            title="Total projects"
            value={totalProjects}
          />

          <StateCard
            icon={<CheckCircle2 size={17} />}
            title="Completed"
            value={completedProjects}
          />

          <StateCard
            icon={<Clock3 size={17} />}
            title="In progress"
            value={inProgressProjects}
          />

          <StateCard
            icon={<Circle size={17} />}
            title="Pending"
            value={pendingProjects}
          />

          <StateCard
            icon={<AlertCircle size={17} />}
            title="Overdue"
            value={overdueProjects}
            danger
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}

       <MainContent/>

        {/* ================= BOTTOM SECTION ================= */}
              <BottomSection/>
      </div>
    </div>
  );
};










export default Dashboard;
