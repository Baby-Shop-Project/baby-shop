import { lazy } from "react";
import { MY_ACCOUNT_PAGE } from "./constants";
import { RouteObject } from "react-router-dom";

const MyAccountPage = lazy(() => import("./MyAccountPage"));

export const myAccountRoute: RouteObject = {
	path: MY_ACCOUNT_PAGE,
	element: <MyAccountPage />,
};
