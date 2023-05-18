import { forwardRef, useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { setPageLoading } from "@services/loading/redux/loading.slice";
import { Animation } from "@components/animation";
import { joinCls } from "@utilities/text.utils";
import { useAppDispatch, useAppSelector } from "@store";

export const Splash = forwardRef<HTMLDivElement, SplashProps>(({ className, children, onStart = () => {}, ...props }, ref) => {
	const dispatch = useAppDispatch();
	const { isPageLoading } = useAppSelector((state) => state.loading, shallowEqual);
	const { isLoading: isFontLoading } = useAppSelector((state) => state.font);

	const [isStarted, setIsStarted] = useState(false);
	const [isTimeout, setIsTimeout] = useState(false);
	const [isFinished, setIsFinished] = useState(false);

	let percent = 0;
	if (isStarted) {
		if (!isFontLoading) percent += 25;
		if (!isPageLoading) percent += 25;
		if (isTimeout) percent = 100;
	}

	useEffect(() => {
		if (isPageLoading) {
			setIsStarted(false);
			setIsTimeout(false);
			setIsFinished(false);
		}
	}, [isPageLoading]);

	useEffect(() => {
		if (isStarted) {
			onStart();
			const timeout = setTimeout(() => setIsTimeout(true), 2000);
			return () => clearTimeout(timeout);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isStarted]);

	const handleAnimating = () => {
		if (percent === 100) dispatch(setPageLoading(false));
	};

	const handleAnimated = () => {
		if (percent === 0) setIsStarted(true);
		if (percent === 100) setIsFinished(true);
	};

	return !isFinished ? (
		<Animation
			animation={percent === 100 ? [{ name: "fadeOut", delay: "0.8s" }] : [{ name: "fadeIn", duration: "0.24s" }]}
			onAnimating={handleAnimating}
			onAnimated={handleAnimated}
			className={joinCls("position-fixed top-0 start-0 bg-light vw-100 vh-100 z-3", className)}
			{...props}
		>
			<div ref={ref} className="row justify-content-center align-items-center h-100">
				Loading
			</div>
		</Animation>
	) : null;
});
