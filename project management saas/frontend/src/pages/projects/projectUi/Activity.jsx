import react from "react";


const Activity = ({
  initials,
  text,
  highlight,
  action,
  time,
}) => {
  return (
    <div className="flex gap-3">

      <div className="w-8 h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center text-[10px] text-gray-400 shrink-0">
        {initials}
      </div>

      <div>

        <p className="text-sm text-gray-400">
          {text}{" "}
          <span className="text-gray-200">
            {highlight}
          </span>{" "}
          {action}
        </p>

        <p className="text-xs text-gray-700 mt-1">
          {time}
        </p>

      </div>

    </div>
  );
};

export default Activity;