import { Button } from "@components/button";
import { Column, Row } from "@components/layout";
import Modal from "@components/modal/Modal";
import ItemCart from "@components/navigator/ItemCart";
import { H2, H3, H5 } from "@components/typography";
import { Transition } from "@headlessui/react";

interface ModalCartProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCart = ({ isOpen, setIsOpen }: ModalCartProps) => {
	return (
		<Transition className="z-20" show={isOpen}>
			<Modal setIsOpen={setIsOpen}>
				<Transition.Child
					className="h-[100dvh] fixed top-0 right-0 z-20"
					enter="transition ease-in-out duration-300 transform"
					enterFrom="translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-x-0"
					leaveTo="translate-x-full"
				>
					<div className="relative h-[100dvh] bg-white w-[350px]">
						<div className="flex justify-between px-4 items-center">
							<H2>Cart</H2>
							<div className="cursor-pointer" onClick={() => setIsOpen(false)}>
								<i className="ri-close-fill ri-2x"></i>
							</div>
						</div>
						<Column className="overflow-auto h-[calc(100%-120px-56px)]">
							<ItemCart />
							<ItemCart />
							<ItemCart />
							<ItemCart />
							<ItemCart />
							<ItemCart />
							<ItemCart />
							<ItemCart />
							<ItemCart />
						</Column>
						<Column className="absolute bottom-0 w-full p-4 gap-4">
							<Row>
								<H2 className="flex-grow">Total</H2>
								<H2 className="flex-grow text-right">$ 100</H2>
							</Row>
							<Row className=" gap-4 bg-white">
								<Button className="flex-grow">Check Out</Button>
								<Button className="flex-grow" variant="outline">
									View Cart
								</Button>
							</Row>
						</Column>
					</div>
				</Transition.Child>
			</Modal>
		</Transition>
	);
};

export default ModalCart;
