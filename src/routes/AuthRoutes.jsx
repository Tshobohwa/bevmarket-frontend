import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getCurrentUser } from "../redux/slices/users/usersAction";

const AuthRoutes = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((store) => store.user);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentUser) {
        dispatch(
          getCurrentUser({
            user: {
              user_id: currentUser.id,
              current_establishment_id: currentUser.current_establishment_id,
            },
          })
        );
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch, currentUser]);

  return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
