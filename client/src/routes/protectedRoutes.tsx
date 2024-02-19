import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/authContext";
import {useContext} from "react"

export default function PrivateRoute() {
  const { isAuth } = useContext(UserContext);

  if (!isAuth) {
    return <Navigate to={"/registrarse"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
