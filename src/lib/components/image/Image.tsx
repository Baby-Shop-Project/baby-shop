import { forwardRef, useEffect, useRef, useState } from "react";
import { Skeleton } from "@components";
import { joinCls } from "@utilities";

export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, lazy = true, fade = true, className, alt, ...props }, ref) => {
	const skeletonRef = useRef(null);
	const [isIntersected, setIsIntersected] = useState(false);

	useEffect(() => {
		if (!lazy) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsIntersected(true);
					if (skeletonRef.current) observer.unobserve(skeletonRef.current);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.8,
			}
		);

		if (skeletonRef.current) observer.observe(skeletonRef.current);

		return () => observer.disconnect();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!lazy) return <img ref={ref} src={src} className={joinCls("object-cover", fade && "fadeIn animated", className)} {...props} alt={alt} />;

	return isIntersected ? (
		<img ref={ref} src={src} className={joinCls("object-cover", fade && "fadeIn animated", className)} {...props} alt={alt} />
	) : (
		<div ref={skeletonRef} className={joinCls("w-100 h-100 overflow-hidden", className)}>
			<Skeleton className="w-100 h-100" />
		</div>
	);
});
