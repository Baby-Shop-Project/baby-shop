import { H5, Row, Text } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Alert = forwardRef<HTMLDivElement, AlertProps>(({ className, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("bg-light-gray py-6 z-10", className)} {...props}>
			<div className="container mx-auto">
				<Row className="justify-between items-center">
					<Row className="gap-4 items-center">
						<i className="ri-checkbox-circle-fill text-lg text-accent" />
						<H5 className="text-black">The item added to your Shopping bag.</H5>
					</Row>

					<Text className="font-body text-accent cursor-pointer">VIEW CART</Text>
				</Row>
			</div>
		</div>
	);
});
