import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls(className)} {...props}>
			TODO: Skeleton
		</div>
	);
});
