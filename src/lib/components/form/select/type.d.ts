type OptionItem = { value: string; label: string };

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
	options: OptionItem[];
	onChange: (value: string) => void;
}
