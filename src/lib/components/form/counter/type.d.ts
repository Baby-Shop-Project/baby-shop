interface CounterProps extends React.InputHTMLAttributes<HTMLInputElement> {
	onIncrease?: () => void;
	onDecrease?: () => void;
}
