import React from "react";
import { Outlet, Navigate, RouteProps } from "react-router-dom";
import { paths } from "./paths";

const PrivateRoute: React.FC<RouteProps> = () => {
    const isAuthenticated = sessionStorage.getItem("authToken");

    return isAuthenticated ? <Outlet /> : <Navigate to={paths.Login} replace />;
};

export default PrivateRoute;
