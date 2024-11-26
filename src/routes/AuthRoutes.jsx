import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AuthRoutes = () => {
  const { currentUser } = useSelector((store) => store.user);

  return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
