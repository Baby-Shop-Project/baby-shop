import { lazy } from "react";
import { HOME_PAGE } from "./constants";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));

export const homeRoute: RouteObject = {
	index: true,
	element: <HomePage />,
};
