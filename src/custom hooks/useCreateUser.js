import { useState } from "react";
import { supabase } from "../supabaseClient";
import addNotifToDom from "../components/notifications/Notifications.jsx";

const useCreateUser = () => {
  const [data, setData] = useState(null); // set data
  const [loading, setLoading] = useState(false); // set loading
  const [registerError, setRegisterError] = useState(null); // set error

  const connectToSupabase = async (email, password, userName) => {
    setLoading(true);

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      data: { name: userName },
    });

    if (error) {
      if (
        error.message ===
        "A user with this email address has already been registered"
      ) {
        setRegisterError(true);
        console.log(error.message);
        addNotifToDom(
          "this email address has already been registered",
          "warning"
        );
      } else {
        setRegisterError(true);
        addNotifToDom("Problem with the server!, Try later", "error");
      }
      
    } else {
      addNotifToDom("Registration was successful", "success");
      setRegisterError(false);
      setData(data);
      console.log(data);
    }
    setLoading(false);
  };
  return [data, loading, registerError, connectToSupabase];
};

export default useCreateUser;
