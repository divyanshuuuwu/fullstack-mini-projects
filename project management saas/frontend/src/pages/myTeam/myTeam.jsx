import {
  Users,
  Plus,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";

const MyTeams = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 py-8">

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

        <button
          className="
            flex items-center gap-2
            bg-white text-black
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            hover:bg-gray-200
            transition
          "
        >
          <Plus size={17} />
          Create Team
        </button>

      </div>

      {/* Teams */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* Team Card */}
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
              Frontend Team
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

              {/* Member */}
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
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Rahul"
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <p className="text-sm text-gray-200">
                    Rahul Sharma
                  </p>

                  <p className="text-xs text-gray-600">
                    Member
                  </p>
                </div>

              </div>

              {/* Member */}
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
                  src="https://i.pravatar.cc/100?img=32"
                  alt="Aman"
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <p className="text-sm text-gray-200">
                    Aman Verma
                  </p>

                  <p className="text-xs text-gray-600">
                    Member
                  </p>
                </div>

              </div>

              {/* Member */}
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
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Divyanshu"
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <p className="text-sm text-gray-200">
                    Divyanshu Shah
                  </p>

                  <p className="text-xs text-gray-600">
                    Owner
                  </p>
                </div>

              </div>

              {/* More Members */}
              <button
                className="
                  w-full
                  text-left
                  px-2.5 py-2
                  text-xs
                  text-gray-500
                  hover:text-gray-300
                  transition
                "
              >
                + 1 more member
              </button>

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

    </div>
  );
};

export default MyTeams;