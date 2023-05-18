import { Button, Center, Column, Footer, H1, H3, Input } from "@components";

export const ResetPasswordPage = ({}: ResetPasswordProps) => {
	return (
		<Column className="container mx-auto min-h-full">
			<Center className="grow">
				<Column className="gap-16">
					<H1 className="text-center">Have you Forgotten Your Password ?</H1>
					<H3 className="text-center">
						If you've forgotten your password, enter your e-mail address
						<br />
						and we'll send you an e-mail
					</H3>

					<Input placeholder="Email" />
					<Button variant="fill">Reset Password</Button>
				</Column>
			</Center>

			<Footer />
		</Column>
	);
};

// Using for lazy loading page
export default ResetPasswordPage;
