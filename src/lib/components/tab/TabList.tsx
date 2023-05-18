import { Row } from "@components";
import { Tab } from "@headlessui/react";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const TabList = forwardRef<HTMLDivElement, TabListProps>(({ className, children, ...props }, ref) => {
	return (
		<Tab.List ref={ref} as={Row} className={joinCls("border-b border-light-gray gap-28", className)} {...props}>
			{children}
		</Tab.List>
	);
});
