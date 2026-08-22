import React from 'react'
import { CalendarDays, FolderKanban } from 'lucide-react'

import ProgressRow from "../../components/ui/ProgressRow";
import UpcomingItem from "../../components/ui/UpcomingItem";



import useProjects from "../../components/hooks/useProjects";



const BottomSection = () => {
  const { projects } = useProjects();
    

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
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          {/* Project Overview */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-medium">Project overview</h2>

                <p className="text-xs text-gray-600 mt-1">
                  Current project distribution
                </p>
              </div>

              <FolderKanban size={18} className="text-gray-600" />
            </div>

            <div className="space-y-5">
              <ProgressRow
                label="Completed"
                value={completedProjects}
                total={totalProjects}
              />

              <ProgressRow
                label="In Progress"
                value={inProgressProjects}
                total={totalProjects}
              />

              <ProgressRow
                label="Pending"
                value={pendingProjects}
                total={totalProjects}
              />

              <ProgressRow
                label="Overdue"
                value={overdueProjects}
                total={totalProjects}
              />
            </div>
          </section>

          {/* Upcoming */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-medium">Upcoming</h2>

                <p className="text-xs text-gray-600 mt-1">
                  Things that need your attention
                </p>
              </div>

              <CalendarDays size={18} className="text-gray-600" />
            </div>

            <div className="space-y-3">
              <UpcomingItem
                title="JWT Authentication"
                project="Flowboard Backend"
                date="Tomorrow"
              />

              <UpcomingItem
                title="Project API"
                project="Flowboard Backend"
                date="Aug 25"
              />

              <UpcomingItem
                title="Dashboard redesign"
                project="Flowboard Frontend"
                date="Aug 28"
              />
            </div>
          </section>
        </div>
  )
}

export default BottomSection