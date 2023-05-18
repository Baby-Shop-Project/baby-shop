import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, ...props }, ref) => (
	<h1 ref={ref} className={joinCls("font-heading font-black tracking-tighter text-4xl", className)} {...props}>
		{children}
	</h1>
));
