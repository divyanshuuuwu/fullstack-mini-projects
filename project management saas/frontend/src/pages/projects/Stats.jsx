import React from 'react'
import { FolderKanban, Clock3 } from 'lucide-react'

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    
              {/* Total */}
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                    Total projects
                  </span>
    
                  <FolderKanban size={16} className="text-gray-600" />
                </div>
    
                <p className="text-2xl font-semibold">
                  
                </p>
    
                <p className="text-xs text-gray-600 mt-1">
                  All your projects
                </p>
              </div>
    
              {/* Active */}
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                    Active
                  </span>
    
                  <Clock3 size={16} className="text-gray-600" />
                </div>
    
                <p className="text-2xl font-semibold">
                  {
                    projects.filter(
                      (project) => project.status === "In Progress"
                    ).length
                  }
                </p>
    
                <p className="text-xs text-gray-600 mt-1">
                  Currently in progress
                </p>
              </div>
    
              {/* Completed */}
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                    Completed
                  </span>
    
                  <CheckCircle2 size={16} className="text-gray-600" />
                </div>
    
                <p className="text-2xl font-semibold">
                  {
                    projects.filter(
                      (project) => project.status === "Completed"
                    ).length
                  }
                </p>
    
                <p className="text-xs text-gray-600 mt-1">
                  Finished projects
                </p>
              </div>
    
              {/* Members */}
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                    Collaborators
                  </span>
    
                  <Users size={16} className="text-gray-600" />
                </div>
    
                <p className="text-2xl font-semibold">
                  12
                </p>
    
                <p className="text-xs text-gray-600 mt-1">
                  Across your projects
                </p>
              </div>
    
            </div>
  )
}

export default Stats