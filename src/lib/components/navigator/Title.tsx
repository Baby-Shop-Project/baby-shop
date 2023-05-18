import { MY_ACCOUNT_PAGE_PATH } from "@pages/authentication.group/my-account";
import { HOME_PAGE_PATH } from "@pages/home";
import { Helmet } from "react-helmet";
import { matchPath, useLocation } from "react-router-dom";

const routes: RouteItem[] = [
	{
		name: "Home Buy",
		path: HOME_PAGE_PATH,
	},
	{
		name: "My Account",
		path: MY_ACCOUNT_PAGE_PATH,
	},
];

export const Title = () => {
	const location = useLocation();

	const matchedRoute = routes.find((route) => matchPath(route.path, location.pathname));
	const title = matchedRoute?.name || "Home Buy";

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
};
