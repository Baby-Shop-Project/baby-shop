import { Row, Text } from "@components";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ options, className, value, placeholder, onChange, ...props }, ref) => {
	return (
		<Listbox ref={ref} as="div" className={joinCls("relative", className)} value={value} onChange={onChange} {...props}>
			<input className="!hidden" value={value} {...props} />

			<Listbox.Button className="w-full border border-light-gray p-4">
				<Row className="justify-between">
					<Text className="text-black">{value || placeholder}</Text>
					<i className="ri-arrow-down-s-line text-black" />
				</Row>
			</Listbox.Button>

			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Listbox.Options className="absolute left-0 right-0 divide-y divide-light-gray bg-white shadow-md focus:outline-none z-10">
					{options.map((option) => (
						<Listbox.Option key={option.value} value={option.value}>
							{({ active }) => <div className={joinCls("p-4", active && "bg-light-gray")}>{option.value}</div>}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Transition>
		</Listbox>
	);
});
