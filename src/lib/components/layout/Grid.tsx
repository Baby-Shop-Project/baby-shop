import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Grid = forwardRef<HTMLDivElement, GridProps>(({ children, className, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("grid", className)} {...props}>
			{children}
		</div>
	);
});
