import react from "react";

const DetailItem = ({ label, value }) => {
  return (
    <div>

      <p className="text-xs text-gray-600 mb-2">
        {label}
      </p>

      <div className="text-sm text-gray-300">
        {value}
      </div>

    </div>
  );
};

export default DetailItem;