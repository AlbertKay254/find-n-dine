import { useEffect } from "react";
import useAppContext from "../context/global-context";

export default function useAuth() {
  const { user } = useAppContext();

  useEffect(() => {
    if (!user) {
      window.location = "/signin";
    }
  }, [user]);
  return user;
}
