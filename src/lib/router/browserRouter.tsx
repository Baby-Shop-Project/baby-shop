import { ROOT, Root } from "@global";
import { ErrorPage } from "@pages/Error";
import { myAccountRoute, resetPasswordRoute } from "@pages/authentication.group";
import { homeRoute } from "@pages/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: ROOT,
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute, myAccountRoute, resetPasswordRoute],
	},
]);
