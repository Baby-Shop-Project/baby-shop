import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Center = forwardRef<HTMLDivElement, CenterProps>(({ children, className, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("flex justify-center items-center", className)} {...props}>
			{children}
		</div>
	);
});
