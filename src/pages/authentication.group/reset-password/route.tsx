import { lazy } from "react";
import { RESET_PASSWORD_PAGE } from "./constants";
import { RouteObject } from "react-router-dom";

const ResetPasswordPage = lazy(() => import("./ResetPasswordPage"));

export const resetPasswordRoute: RouteObject = {
	path: RESET_PASSWORD_PAGE,
	element: <ResetPasswordPage />,
};
