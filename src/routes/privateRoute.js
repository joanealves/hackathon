import React from "react";
import { useEffect, useState } from "react";

export function PrivateRoute({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const hash = JSON.parse(localStorage.getItem("users"));
    if (hash !== "") {
      setUser(true);
    }
  }, []);

  return user ? children : <div></div>;
}
