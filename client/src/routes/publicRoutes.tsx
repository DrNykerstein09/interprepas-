import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/authContext";
import { useContext } from "react";

export default function PublicRoute() {
  const { isAuth } = useContext(UserContext);

  if (isAuth) {
    return <Navigate to={"/private"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
