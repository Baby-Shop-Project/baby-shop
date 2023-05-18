import { Center, Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ icon, className, ...props }, ref) => {
	return (
		<Row className="relative">
			<input
				ref={ref}
				type="text"
				className={joinCls(
					"!outline-none font-body text-black w-full p-4 border border-light-gray placeholder:text-dark-gray hover:border-in-gray focus:border-in-gray",
					className,
					icon && "pr-12"
				)}
				{...props}
			/>
			<Center className="absolute right-0 w-12 h-full text-dark-gray hover:text-accent cursor-pointer">{icon}</Center>
		</Row>
	);
});
