import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const user = false;

  return user ? children : <Navigate to="/" />;
}