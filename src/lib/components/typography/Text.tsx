import * as React from "react";
import { joinCls } from "@utilities/text.utils";

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ children, className, ...props }, ref) => (
	<p ref={ref} className={joinCls("font-body font-bold text-base", className)} {...props}>
		{children}
	</p>
));
