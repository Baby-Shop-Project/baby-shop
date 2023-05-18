import { Tab } from "@headlessui/react";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const TabPanels = forwardRef<HTMLDivElement, TabPanesProps>(({ className, children, ...props }, ref) => {
	return (
		<Tab.Panels ref={ref} as="div" className={joinCls("", className)} {...props}>
			{children}
		</Tab.Panels>
	);
});
