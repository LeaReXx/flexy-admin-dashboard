import { toast } from "react-toastify";
const addNotifToDom = (
  message = "No Message Here 🤨",
  type = "success",
  position = "bottom-right",
  autoClose = 3000,
  hideProgressBar = true,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined,
  theme = "light"
) => {
  toast(
    <>
      <div
        className={`flex items-center ${
          type === "success"
            ? "text-[#1ca505]" // success
            : type === "warning"
            ? "text-[#bc8904]" // warning
            : "text-[#af0407]" // error
        }`}
      >
        <i
          className={`text-xl ${
            type === "success"
              ? "fa-regular fa-circle-check" // success
              : type === "warning"
              ? "fa-solid fa-triangle-exclamation" // warning
              : "fa-regular fa-circle-xmark" // error
          }`}
        ></i>
        <strong className="px-1 text-lg font-normal">{message}</strong>
      </div>
    </>,
    {
      position,
      autoClose,
      hideProgressBar,
      closeOnClick,
      pauseOnHover,
      draggable,
      progress,
      theme,
    }
  );
};

export default addNotifToDom;
