import { forwardRef } from "react";
import { Tab, Transition } from "@headlessui/react";
import { joinCls } from "@utilities";
import { Animation } from "@components";

export const TabPanel = forwardRef<HTMLDivElement, TabPanesProps>(({ className, children, ...props }, ref) => {
	return (
		<Tab.Panel ref={ref} as="div" className={joinCls("mt-10", className)} {...props}>
			<Animation animation={[{ name: "fadeIn", duration: "0.4s" }]}>
				<div className="">{children}</div>
			</Animation>
		</Tab.Panel>
	);
});
