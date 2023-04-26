import { useState } from "react";
import { supabase } from "../supabaseClient";
import addNotifToDom from "../components/notifications/Notifications.jsx";
const useCreateUser = () => {
  const [data, setData] = useState(null); // set data
  const [loading, setLoading] = useState(false); // set loading
  const [registerError, setRegisterError] = useState(null); // set error

  const registerToSupabase = async (email, password, userName) => {
    setLoading(true);
    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name: userName },
      },
    });

    if (data) {
      if (!data.user.identities.length) {
        setRegisterError(true);
        addNotifToDom(
          "this email address has already been registered",
          "warning"
        );
      } else {
        addNotifToDom("Registration was successful", "success");
        setRegisterError(false);
        setData(data);
      }
    } else {
      addNotifToDom("something went wrong, please try again", "error");
    }
    setLoading(false);
  };
  return [data, loading, registerError, registerToSupabase];
};

export default useCreateUser;
