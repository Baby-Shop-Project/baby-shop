import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(({ children, className, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("absolute top-0 left-0 w-full h-full", className)} {...props}>
			{children}
		</div>
	);
});
