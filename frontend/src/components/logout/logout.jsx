import { useCookies } from "react-cookie";
import useAppContext from "../../context/global-context";
import React, { useEffect } from "react";

export default function LogoutPage() {
  const [, , removeCookie] = useCookies(["user"]);
  const { setUser } = useAppContext();

  useEffect(() => {
    removeCookie("user");
    setUser(null);
    window.location = "/signin";
  }, []);

  return <div></div>;
}
