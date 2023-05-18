import { forwardRef } from "react";
import { Tab } from "@headlessui/react";
import { H3 } from "@components";
import { joinCls } from "@utilities";

export const TabItem = forwardRef<HTMLDivElement, TabItemProps>(({ className, children, ...props }, ref) => {
	return (
		<Tab
			ref={ref}
			as={H3}
			className={({ selected }) =>
				joinCls("py-8 border-b border-transparent text-dark-gray hover:text-black duration-300 cursor-pointer", className, selected && "!text-black !border-black")
			}
			{...props}
		>
			{children}
		</Tab>
	);
});
