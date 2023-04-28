import { useState } from "react";
import { supabase } from "../supabaseClient";

const useAuth = () => {
  const [siteUser, setSiteUser] = useState(null);

  const authorizationUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log(error);
    } else {
      setSiteUser(data.session);
    }
  };

  return [authorizationUser, siteUser];
};

export default useAuth;
