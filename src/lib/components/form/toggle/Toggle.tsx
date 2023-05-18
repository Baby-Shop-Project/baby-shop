import { Row } from "@components";
import { Switch } from "@headlessui/react";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(({ checked, className, onChange, ...props }, ref) => {
	return (
		<Switch ref={ref} checked={checked} onChange={onChange} className={joinCls("relative flex h-6 w-11 items-center rounded-full bg-dark-gray", className, checked && "bg-accent")}>
			<input className="!hidden" checked={checked} {...props} />
			<span className={joinCls("block h-4 w-4 transform rounded-full bg-white transition", checked ? "translate-x-6" : "translate-x-1")} />
		</Switch>
	);
});
