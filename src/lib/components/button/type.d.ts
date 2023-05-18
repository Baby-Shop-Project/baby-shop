type ButtonVariant = "fill" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	LeftItem?: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>;
	RightItem?: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>;
}
