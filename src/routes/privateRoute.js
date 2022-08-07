import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const [user, setUser] = useState(true);

  //Fazer funcionar

  useEffect(() => {
    const hash = JSON.parse(localStorage.getItem("users"));
    if (hash != "") {
      console.log("VALOR HASH ATUAL", hash);
      setUser(true);
      console.log(user);
    }
  }, []);

  return user ? children : <Navigate to="/" />;
}
