import React from 'react'



const MemberCard = ({member}) => {
  return (
     <div
                className="
                  flex items-center gap-3
                  px-2.5 py-2
                  rounded-lg
                  hover:bg-white/[0.04]
                  transition
                "
              >

                <img
                  src="zyx"
                  alt="err"
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <p className="text-sm text-gray-200">
                    {member.name}
                  </p>

                  <p className="text-xs text-gray-600">
                    Member
                  </p>
                </div>

              </div>
  )
}

export default MemberCard