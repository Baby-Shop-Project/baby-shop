import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const H5 = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, ...props }, ref) => (
	<h5 ref={ref} className={joinCls("font-heading font-bold text-base", className)} {...props}>
		{children}
	</h5>
));
