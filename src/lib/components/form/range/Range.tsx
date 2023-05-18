import { Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Range = forwardRef<HTMLInputElement, RangeProps>(({ checked, className, onClick, ...props }, ref) => {
	return (
		<div className="relative w-8 h-5 bg-dark-gray rounded-full cursor-pointer hover:bg-accent transition-all duration-300">
			<input ref={ref} type="range" className="!hidden" checked={checked} {...props} />
			TODO: Range
		</div>
	);
});
