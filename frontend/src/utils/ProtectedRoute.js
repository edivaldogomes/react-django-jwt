import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  if (!user) {
    console.log("No user Authenticated");
    return <Navigate to="/login" replace />;
  }
  return children;
};
