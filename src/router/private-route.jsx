import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles }) => {
  const { isUserLogin, user } = useSelector((state) => state.auth);

  if (!isUserLogin) return <Navigate to="/login" />;
  if (!roles || !Array.isArray(roles) || !roles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;
