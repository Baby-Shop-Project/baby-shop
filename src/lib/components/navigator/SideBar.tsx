import { Column, Row } from "@components/layout";
import Modal from "@components/modal/Modal";
import MenuItemMobile from "@components/navigator/MenuItemMobile";
import { H4, H5 } from "@components/typography";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

interface SideBarProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	menu: MenuItemType[];
}

const SideBar = ({ isOpen, menu, setIsOpen }: SideBarProps) => {
	return (
		<Transition show={isOpen}>
			<Modal setIsOpen={setIsOpen}>
				<Transition.Child
					className="h-[100dvh] fixed top-0 left-0 z-20"
					enter="transition ease-in-out duration-300 transform"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
				>
					<div className="relative h-full bg-white w-[300px]">
						<Column className="h-full justify-between">
							<Column className="h-full pt-14 pb-16">
								<Column className="overflow-y-auto">
									{menu.map((item, index) => (
										<MenuItemMobile item={item} key={index} />
									))}
								</Column>
							</Column>
							<Row className="h-14 bg-blue-300 absolute w-full top-[100%] -translate-y-full items-center px-4 gap-2 text-white">
								<i className="ri-user-3-fill ri-lg"></i>
								<H4>Đăng nhập</H4>
							</Row>
						</Column>
						<div className="absolute top-0 right-2 cursor-pointer" onClick={() => setIsOpen(false)}>
							<i className="ri-close-fill ri-2x"></i>
						</div>
					</div>
				</Transition.Child>
			</Modal>
		</Transition>
	);
};

export default SideBar;
