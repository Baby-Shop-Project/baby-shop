import { H3 } from "@components/typography";
import { joinCls } from "@utilities";
import React from "react";

interface MenuChildrenItemProps {
	child: MenuItemType;
}

const MenuChildrenItem = ({ child }: MenuChildrenItemProps) => {
	const [isHoveredChildren, setIsHoveredChildren] = React.useState(false);

	const handleMouseEnterChildren = () => {
		setIsHoveredChildren(true);
	};

	const handleMouseLeaveChildren = () => {
		setIsHoveredChildren(false);
	};

	return (
		<div className="p-4 cursor-pointer bg-red-200" onMouseEnter={handleMouseEnterChildren} onMouseLeave={handleMouseLeaveChildren}>
			<H3 className={joinCls("px-4 transition-all duration-300", isHoveredChildren ? "text-blue-300" : "")}>{child.name}</H3>
		</div>
	);
};

export default MenuChildrenItem;
