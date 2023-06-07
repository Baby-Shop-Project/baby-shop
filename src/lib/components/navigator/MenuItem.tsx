import { Animation } from "@components/animation";
import { Column } from "@components/layout";
import { H3, H5 } from "@components/typography";
import { joinCls } from "@utilities";
import React from "react";

interface MenuItemProps {
	item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
	const [isHovered, setIsHovered] = React.useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<H3 className={joinCls("text-center cursor-pointer transition-all duration-300", isHovered ? "text-blue-300" : "")}>{item.name}</H3>
			{isHovered && (
				<Animation animation={[{ name: "fadeIn", duration: "0.3s" }]}>
					<Column className="bg-blue-300 p-6 absolute top-full rounded-md gap-4 ">
						<H5 className="whitespace-nowrap text-white transition-all duration-200 cursor-pointer hover:text-white-alpha-700">Text 1 12312312312312 </H5>
						<H5 className="whitespace-nowrap text-white transition-all duration-200 cursor-pointer hover:text-white-alpha-700">Text 2 123123</H5>
						<H5 className="whitespace-nowrap text-white transition-all duration-200 cursor-pointer hover:text-white-alpha-700">Text 3</H5>
						<H5 className="whitespace-nowrap text-white transition-all duration-200 cursor-pointer hover:text-white-alpha-700">Text 4</H5>
						<H5 className="whitespace-nowrap text-white transition-all duration-200 cursor-pointer hover:text-white-alpha-700">Text 5</H5>
					</Column>
				</Animation>
			)}
		</div>
	);
};

export default MenuItem;
