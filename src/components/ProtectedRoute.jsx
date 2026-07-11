import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
