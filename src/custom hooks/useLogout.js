import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import addNotifToDom from "../components/notifications/Notifications";
const useLogout = () => {
  const navigate = useNavigate();

  const logOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      addNotifToDom("You are logged out", "success");
      navigate("/");
    } else {
      addNotifToDom("something went wrong, please try again", "error");
    }
  };
  return [logOutUser];
};

export default useLogout;
