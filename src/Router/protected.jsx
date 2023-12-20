import React from "react";
import useAuth from "../Hooks/useAuth";
import UnAuthorized from "../Pages/unauthorized";
//import Assignment from "../Pages/Assignment";
import { Outlet } from "react-router-dom";
export default function Protected() {
  const isAuthorized = useAuth();
  return isAuthorized == true ? <Outlet /> : <UnAuthorized />;
}
