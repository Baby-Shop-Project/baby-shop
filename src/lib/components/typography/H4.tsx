import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const H4 = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, ...props }, ref) => (
	<h4 ref={ref} className={joinCls("font-heading font-bold text-lg", className)} {...props}>
		{children}
	</h4>
));
