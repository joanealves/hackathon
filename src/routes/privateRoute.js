import React from "react";
import { useState } from "react";

export function PrivateRoute({ children }) {
  const [user, setUser] = useState(false);

  const hash = JSON.parse(localStorage.getItem("users"));
  if (hash !== "") {
    console.log("VALOR HASH ATUAL", hash);
    setUser(true);
  }

  return user ? children : <div></div>;
}
