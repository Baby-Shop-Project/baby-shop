import { Animation, H1, H5, Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import IconSocial from "@components/navigator/IconSocial";
import { menu } from "@components/navigator/data-header";
import MenuItem from "@components/navigator/MenuItem";
import SideBar from "@components/navigator/SideBar";
import ModalCart from "@components/navigator/ModalCart";

export const Navigator = forwardRef<HTMLDivElement, NavigatorProps>(({ className, ...props }, ref) => {
	const [showHeader, setShowHeader] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isShownCart, setIsShownCart] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			if (scrollPosition > 200) {
				setShowHeader(true);
			} else {
				setShowHeader(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Title />
			<nav ref={ref} className={joinCls("hidden md:block h-56 bg-white z-10", className)} {...props}>
				<div className="border-b">
					<Row className="container mx-auto items-center justify-between py-2">
						<Row className="gap-20">
							<H5>abc</H5>
							<H5>abc</H5>
							<H5>abc</H5>
							<H5>abc</H5>
							<H5>abc</H5>
						</Row>

						<Row className="cursor-pointer">
							<i className="ri-user-3-fill"></i>
							<span>Đăng nhập</span>
						</Row>
					</Row>
				</div>

				<Row className="container justify-between items-center my-2 mx-auto">
					<Row>
						<IconSocial icon={<i className="ri-facebook-fill ri-lg text-white"></i>} />
						<IconSocial className="ml-2" icon={<i className="ri-instagram-fill ri-lg text-white"></i>} />
						<IconSocial className="ml-2" icon={<i className="ri-twitter-fill ri-lg text-white"></i>} />
						<IconSocial className="ml-2" icon={<i className="ri-youtube-fill ri-lg text-white"></i>} />
					</Row>

					<Row>
						<H1>KIDZ</H1>
					</Row>

					<Row>
						<Row className="items-center gap-10">
							<Link to="/shop">
								<i className="ri-heart-3-line text-base ri-2x hover:text-accent" />
							</Link>
							<Link to="/shop">
								<i className="ri-search-2-line ri-2x hover:text-accent" />
							</Link>
							<div onClick={() => setIsShownCart(true)}>
								<i className="ri-shopping-basket-2-fill ri-2x hover:text-accent" />
							</div>
						</Row>
					</Row>
				</Row>
				<Row className="container items-center justify-between mx-auto gap-2 mt-10">
					{menu.map((item, index) => (
						<MenuItem item={item} key={index} />
					))}
				</Row>
			</nav>
			{showHeader && (
				<div className="hidden md:block fixed top-0 left-0 z-10 bg-white w-full py-4">
					<Animation animation={[{ name: "fadeIn", duration: "0.8s" }]}>
						<Row className="container items-center justify-between mx-auto gap-2">
							{menu.map((item, index) => (
								<MenuItem item={item} key={index} />
							))}
						</Row>
					</Animation>
				</div>
			)}
			<nav className="md:hidden  py-1 px-4">
				<Row className="container justify-between items-center my-2 mx-auto">
					<div className="cursor-pointer hover:bg-gray-200 w-14 flex justify-center items-center rounded-md active:bg-gray-300" onClick={() => setIsOpen(true)}>
						<i className="ri-menu-2-fill ri-2x"></i>
					</div>

					<Row>
						<H1>KIDZ</H1>
					</Row>

					<Row className="mr-2">
						<Row className="items-center gap-10">
							<Link to="/shop">
								<i className="ri-heart-3-line text-base ri-2x hover:text-accent" />
							</Link>
							<Link to="/shop">
								<i className="ri-search-2-line ri-2x hover:text-accent" />
							</Link>
							<div onClick={() => setIsShownCart(true)}>
								<i className="ri-shopping-basket-2-fill ri-2x hover:text-accent" />
							</div>
						</Row>
					</Row>
				</Row>
			</nav>

			{showHeader && (
				<div className="md:hidden fixed top-0 left-0 z-10 bg-white w-full py-1 px-4">
					<Animation animation={[{ name: "fadeIn", duration: "0.8s" }]}>
						<Row className="container justify-between items-center my-2 mx-auto">
							<div className="cursor-pointer hover:bg-gray-200 w-14 flex justify-center items-center rounded-md active:bg-gray-300">
								<i className="ri-menu-2-fill ri-2x"></i>
							</div>

							<Row>
								<H1>KIDZ</H1>
							</Row>

							<Row>
								<Row className="items-center gap-10">
									<Link to="/shop">
										<i className="ri-heart-3-line text-base ri-2x hover:text-accent" />
									</Link>
									<Link to="/shop">
										<i className="ri-search-2-line ri-2x hover:text-accent" />
									</Link>
									<div onClick={() => setIsShownCart(true)}>
										<i className="ri-shopping-basket-2-fill ri-2x hover:text-accent" />
									</div>
								</Row>
							</Row>
						</Row>
					</Animation>
				</div>
			)}
			<SideBar isOpen={isOpen} setIsOpen={setIsOpen} menu={menu} />
			<ModalCart isOpen={isShownCart} setIsOpen={setIsShownCart} />
		</>
	);
});
