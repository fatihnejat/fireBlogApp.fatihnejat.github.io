import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";

const PrivateRouter = () => {
  const { currentUser } = useContext(LoginContext);
  return <div> {currentUser ? <Outlet /> : <Navigate to="/login" />} </div>;
};

export default PrivateRouter;
