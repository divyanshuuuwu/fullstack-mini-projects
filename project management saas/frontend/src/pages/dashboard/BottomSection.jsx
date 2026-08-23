import React from 'react'
import { CalendarDays, FolderKanban } from 'lucide-react'
import { useEffect } from 'react'

import ProgressRow from "../../components/ui/ProgressRow";
import UpcomingItem from "../../components/ui/UpcomingItem";



import useProjects from "../../components/hooks/useProjects";
import useTasks from "../../components/hooks/useTasks";


const BottomSection = () => {
  const { projects } = useProjects();
  const { tasks, getMytasks } = useTasks();

  useEffect(() => {
    getMytasks();
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

            {/* Tasks */}
        <div className="p-4 space-y-2">
          {tasks?.length > 0 ? (
            tasks.map((task) => (
              <UpcomingItem
                key={task._id}
                title={task.title}
                project={task.project?.name}
                status={task.status}
                priority={task.priority}
              />
            ))
          ) : (
            <p className="text-sm text-gray-500 text-center py-10">
              No tasks assigned to you
            </p>
          )}
        </div>
          </section>
        </div>
  )
}

export default BottomSection