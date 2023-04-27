import { useState } from "react";
import { supabase } from "../supabaseClient";
import addNotifToDom from "../components/notifications/Notifications.jsx";

const useLoginUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginToSupabase = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data.user) {
      addNotifToDom("You have successfully logged in", "success");
    } else {
      addNotifToDom("email or password is incorrect", "error");
    }
    setLoading(false);
  };

  return [loading, loginToSupabase];
};

export default useLoginUser;
