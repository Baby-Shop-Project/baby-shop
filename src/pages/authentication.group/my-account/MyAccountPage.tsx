import { Button, Center, Column, Footer, Grid, H1, H2, H3, H4, Image, Input, Overlay, Row, Text, Select, H5, Toggle, TabPanels, TabPanel } from "@components";
import { Tab } from "@headlessui/react";
import { joinCls, randomImgUrl } from "@utilities";
import { Link } from "react-router-dom";

export const MyAccountPage = ({}: MyAccountProps) => {
	return (
		<Column className="container mx-auto min-h-full">
			<Center className="grow">
				<Column className="gap-16">
					<H1 className="text-dark text-center">My Account</H1>
					<Tab.Group>
						<Tab.List className="flex space-x-1 rounded-xl bg-light-gray p-1">
							<Tab
								className={({ selected }) =>
									joinCls(
										"w-64 rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white ring-opacity-60 ring-offset-2 ring-offset-dark-gray focus:ring-2",
										selected ? "bg-white shadow" : "hover:bg-white-alpha-200"
									)
								}
							>
								<H3>Sign in</H3>
							</Tab>
							<Tab
								className={({ selected }) =>
									joinCls(
										"w-64 rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white ring-opacity-60 ring-offset-2 ring-offset-dark-gray focus:ring-2",
										selected ? "bg-white shadow" : "hover:bg-white-alpha-200"
									)
								}
							>
								<H3>Register</H3>
							</Tab>
						</Tab.List>

						<TabPanels>
							<TabPanel>
								<Column className="gap-4">
									<Input placeholder="Email" />
									<Input placeholder="Password" type="password" />
									<Row className="justify-end gap-4">
										<H5>Remember me</H5>
										<Toggle />
									</Row>
								</Column>

								<Button variant="fill" className="w-full mt-16">
									Sign In
								</Button>

								<Link to="/">
									<H5 className="text-center mt-3">Have you forgotten your password?</H5>
								</Link>
							</TabPanel>

							<TabPanel>
								<Column className="gap-4">
									<Input placeholder="Email" />
									<Input placeholder="Password" type="password" />
									<Input placeholder="Retype password" type="password" />
								</Column>

								<Button variant="fill" className="w-full mt-16">
									Register
								</Button>
							</TabPanel>
						</TabPanels>
					</Tab.Group>
				</Column>
			</Center>

			<Footer />
		</Column>
	);
};

// Using for lazy loading page
export default MyAccountPage;
