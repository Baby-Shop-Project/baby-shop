interface NavigatorProps extends React.HTMLAttributes<HTMLDivElement> {}

type RouteItem = {
	name: string;
	path: string;
};

type MenuItemType = {
	name: string;
	children?: MenuItemType[];
};
