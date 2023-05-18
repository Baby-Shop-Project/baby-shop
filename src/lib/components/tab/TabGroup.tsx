import { Tab } from "@headlessui/react";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>(({ className, children, ...props }, ref) => {
	return (
		<Tab.Group ref={ref} as="div" className={joinCls("", className)} {...props}>
			{children}
		</Tab.Group>
	);
});
