import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Column = forwardRef<HTMLDivElement, ColumnProps>(({ children, className, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("flex flex-col", className)} {...props}>
			{children}
		</div>
	);
});
