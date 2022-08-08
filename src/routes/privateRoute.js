import React from "react";
import { useEffect, useState } from "react";

export function PrivateRoute({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const hash = JSON.parse(localStorage.getItem("users"));
    if (hash !== "") {
      console.log("VALOR HASH ATUAL", hash);
      setUser(true);
      console.log(user);
    }
  });

  return user ? children : <div></div>;
}
