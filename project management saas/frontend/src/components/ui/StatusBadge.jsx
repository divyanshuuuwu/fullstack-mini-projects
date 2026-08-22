import react from "react";
const StatusBadge = ({ status }) => {
  const styles = {
    completed: "bg-green-500/10 text-green-400 border-green-500/10",

    "in-progress": "bg-blue-500/10 text-blue-400 border-blue-500/10",

    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/10",

    overdue: "bg-red-500/10 text-red-400 border-red-500/10",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-md border text-[10px] capitalize
        ${styles[status] || "bg-[#1b1b1b] text-gray-500 border-[#242424]"}`}
    >
      {status?.replace("-", " ") || "Unknown"}
    </span>
  );
};
export default StatusBadge;