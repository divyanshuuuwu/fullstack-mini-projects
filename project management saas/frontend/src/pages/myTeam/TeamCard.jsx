import React from 'react'
import { Users, MoreHorizontal, ArrowRight } from 'lucide-react'
import MemberCard from '../myTeam/MemberCard'

const TeamCard = ({team}) => {
  return (
    <div>
        <div
          className="
            bg-[#111111]
            border border-white/[0.07]
            rounded-xl
            p-5
            hover:border-white/[0.14]
            transition
          "
        >

          {/* Card Header */}
          <div className="flex items-start justify-between">

            <div
              className="
                w-11 h-11
                rounded-lg
                bg-white/[0.06]
                border border-white/[0.06]
                flex items-center justify-center
              "
            >
              <Users size={20} className="text-gray-300" />
            </div>

            <button
              className="
                p-1.5
                rounded-md
                text-gray-500
                hover:text-white
                hover:bg-white/[0.06]
                transition
              "
            >
              <MoreHorizontal size={19} />
            </button>

          </div>

          {/* Team Info */}
          <div className="mt-5">

            <h2 className="text-base font-medium">
              {team.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Team workspace
            </p>

          </div>

          {/* Members */}
          <div className="mt-6">

            <div className="flex items-center justify-between mb-3">

              <p className="text-xs text-gray-500">
                Members
              </p>

              <span className="text-xs text-gray-600">
                4 members
              </span>

            </div>

            {/* Member List */}
            <div className="space-y-2">

              {/* Members */}
             
               {team.members.map((member) => (
                <MemberCard
                    key={member._id}
                    member={member}
                />
            ))}
            

              

            </div>

          </div>

          {/* Footer */}
          <button
            className="
              w-full
              mt-5
              flex items-center justify-between
              px-3 py-2.5
              rounded-lg
              bg-white/[0.04]
              border border-white/[0.06]
              text-sm text-gray-300
              hover:bg-white/[0.08]
              hover:text-white
              transition
            "
          >
            <span>Open team</span>

            <ArrowRight size={16} />

          </button>

        </div>
    </div>
  )
}

export default TeamCard