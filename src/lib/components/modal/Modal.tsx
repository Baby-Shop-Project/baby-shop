import { Dialog } from "@headlessui/react";

interface ModalProps {
	isOpen?: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}

const Modal = ({ isOpen = true, setIsOpen, children }: ModalProps) => {
	return (
		<Dialog onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 bg-black/30 z-10" onClick={() => setIsOpen(false)} />
			{children}
		</Dialog>
	);
};

export default Modal;
