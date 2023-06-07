import { Row } from "@components/layout";
import MenuChildrenItem from "@components/navigator/MenuChildrenItem";
import { H3, H4 } from "@components/typography";
import { Transition } from "@headlessui/react";
import { joinCls } from "@utilities";
import React, { Fragment } from "react";

interface MenuItemMobileProps {
	item: MenuItemType;
}

const MenuItemMobile = ({ item }: MenuItemMobileProps) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [isShownChildren, setIsShownChildren] = React.useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<Row className="cursor-pointer p-4 items-center justify-between" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<H3 className={joinCls("transition-all duration-300", isHovered ? "text-blue-300" : "")}>{item.name}</H3>
			{item.children && item.children.length > 0 && (
				<div>
					<i className={joinCls("ri-arrow-drop-right-line ri-2x", isHovered ? "text-blue-300" : "")} onClick={() => setIsShownChildren(true)}></i>
				</div>
			)}

			<Transition
				show={isShownChildren}
				enter="transition ease-in-out duration-300 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
				as={Fragment}
			>
				<div className="w-full absolute top-0 left-0 h-full pb-16 bg-white">
					<div className="flex items-center hover:text-blue-300 gap-2" onClick={() => setIsShownChildren(false)}>
						<i className="ri-arrow-left-s-line ri-2x"></i>
						<H4> Back</H4>
					</div>
					{item.children && item.children.length > 0 && item.children.map((child, index) => <MenuChildrenItem child={child} key={index} />)}
				</div>
			</Transition>
		</Row>
	);
};

export default MenuItemMobile;
