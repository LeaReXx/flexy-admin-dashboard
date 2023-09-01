const Loading = ({ isActive }) => {
  return (
    <div
      className={`loading fixed z-50 top-0 w-full h-full flex justify-center items-center bg-gray-500 duration-500 ${
        isActive ? "visible" : "invisible"
      }`}
    >
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
