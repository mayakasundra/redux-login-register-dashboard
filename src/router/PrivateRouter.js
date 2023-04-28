import React from "react";
import { Navigate } from "react-router-dom";
export default function PrivateRouter({ children }) {
  const currentUser = localStorage.getItem("token");
  return currentUser ? children : <Navigate to="/" replace />;
}
