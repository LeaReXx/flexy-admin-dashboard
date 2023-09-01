import { useEffect, useState } from "react";

const Loading = ({ isActive }) => {
  const [loadingIsActive, setLoadingIsActive] = useState(isActive);

  useEffect(() => setLoadingIsActive(isActive), [isActive]);
  return (
    <div
      className={`loading fixed z-50 top-0 w-full h-screen flex justify-center items-center bg-gray-500 duration-500 ${
        loadingIsActive ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
