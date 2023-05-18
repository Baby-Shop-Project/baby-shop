import { joinCls } from "@utilities/text.utils";
import { MouseEvent, forwardRef } from "react";
import { H5, Row } from "@components";

const buttonClass: Record<ButtonVariant, string> = {
	fill: `
    border-2 border-transparent 
    bg-black text-white fill-white 
    hover:bg-white hover:text-black hover:fill-black hover:border-black 
    active:bg-white active:text-black active:fill-black
  `,
	outline: `
    border-2 
    bg-transparent text-black fill-black border-black 
    hover:bg-black hover:text-white hover:fill-white hover:border-white 
    active:bg-black active:text-white active:fill-white active:border-white
  `,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ title, disabled = false, variant = "fill", type, LeftItem, RightItem, children, className, onClick = () => {}, ...props }, ref) => {
		const handleClicked = (event: MouseEvent<HTMLButtonElement>) => {
			if (disabled) return;
			onClick!(event);
		};

		return (
			<button
				ref={ref}
				className={joinCls("px-6 py-3 transition-colors duration-300", buttonClass[variant], className, disabled ? "opacity-50" : "")}
				disabled={disabled}
				type={type}
				onClick={handleClicked}
				{...props}
			>
				<Row className="button-layout items-center justify-center gap-2">
					{LeftItem && <LeftItem className="w-6 h-6" />}
					<H5 className="button-text transition-colors duration-0">{children}</H5>
					{RightItem && <RightItem className="w-6 h-6" />}
				</Row>
			</button>
		);
	}
);
