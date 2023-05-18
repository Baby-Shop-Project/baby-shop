import { Button, Center, Column, Footer, H1, H3, Navigator } from "@components";
import { useRouteError } from "react-router-dom";

export const ErrorPage = ({}: ErrorPageProps) => {
	const error: any = useRouteError();
	console.error(error);

	return (
		<Column className="relative container h-screen mx-auto">
			<Navigator className="fixed top-0 left-0 w-full" />

			<Center className="grow flex-col gap-8 pt-16">
				<H1>404 ERROR</H1>
				<H3 className="text-center text-dark-gray">
					This page not found
					<br />
					Back to home and start again
				</H3>

				<div className="w-80 h-[1px] bg-in-gray" />

				<Button variant="outline">BACK TO HOMEPAGE</Button>
			</Center>

			<Footer />
		</Column>
	);
};

// Using for lazy loading page
export default ErrorPage;
