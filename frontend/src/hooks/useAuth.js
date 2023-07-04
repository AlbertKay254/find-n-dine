import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { UserContext } from "../App";

export default function useAuth() {
  const [cookies, ,] = useCookies(["user"]);
  const user = useContext(UserContext) || cookies.user;

  useEffect(() => {
    if (!user) {
      window.location = "/signin";
    }
  }, [user]);

  return user;
}
