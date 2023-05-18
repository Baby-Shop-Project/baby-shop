import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Row = forwardRef<HTMLDivElement, RowProps>(({ children, className, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("flex", className)} {...props}>
			{children}
		</div>
	);
});
