import { Center, Row, Text } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Counter = forwardRef<HTMLInputElement, CounterProps>(({ onIncrease, onDecrease, className, ...props }, ref) => {
	return (
		<Row className="relative bg-light-gray">
			<Center className="cursor-pointer hover:bg-accent hover:text-white p-4" onClick={onDecrease}>
				<i className="ri-subtract-line" />
			</Center>
			<input
				ref={ref}
				type="number"
				className={joinCls("!appearance-none !outline-none grow bg-transparent font-heading text-lg text-center text-black w-16 px-2 placeholder:text-dark-gray", className)}
				{...props}
			/>
			<Center className="cursor-pointer hover:bg-accent hover:text-white p-4" onClick={onIncrease}>
				<i className="ri-add-line" />
			</Center>
		</Row>
	);
});
