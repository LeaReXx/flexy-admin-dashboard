import { useState } from "react";
import { supabase } from "../supabaseClient";
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
      setRegisterError(true);
    } else {
      setRegisterError(false);
      setData(data);
    }
    setLoading(false);
  };
  return [data, loading, registerError, connectToSupabase];
};

export default useCreateUser;
