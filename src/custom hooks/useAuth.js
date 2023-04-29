import { useState } from "react";
import { supabase } from "../supabaseClient";

const useAuth = () => {
  const [siteUser, setSiteUser] = useState(null);

  const authorizationUser = async () => {
    const { data } = await supabase.auth.getUser()
    if (data.user) {
      setSiteUser(data);
    }
  };

  return [authorizationUser, siteUser];
};

export default useAuth;
