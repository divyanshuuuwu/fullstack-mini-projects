import react from 'react'
import { User } from 'lucide-react'

const Member = ({ initials, name, role }) => {
  return (
    <div className="flex items-center gap-3">

      <div className="w-9 h-9 rounded-full bg-[#1c1c1c] flex items-center justify-center text-xs text-gray-400">
        {initials}
      </div>

      <div className="flex-1 min-w-0">

        <p className="text-sm text-gray-300 truncate">
          {name}
        </p>

        <p className="text-xs text-gray-600">
          {role}
        </p>

      </div>

      <User size={14} className="text-gray-700" />

    </div>
  );
};


export default Member;