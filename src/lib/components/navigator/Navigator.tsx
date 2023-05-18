import { H2, H5, Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";

export const Navigator = forwardRef<HTMLDivElement, NavigatorProps>(({ className, ...props }, ref) => {
	return (
		<>
			<Title />

			<nav ref={ref} className={joinCls("h-16 border-b border-in-gray bg-white z-10", className)} {...props}>
				<Row className="container mx-auto h-full justify-between items-center gap-14">
					<Link to="/">
						<H2 className="text-black">HOME BUY</H2>
					</Link>

					<Row className="items-center gap-16">
						<Row className="items-center gap-20">
							<Link to="/shop">
								<H5 className="text-black hover:text-accent">Shop</H5>
							</Link>
							<Link to="/blog">
								<H5 className="text-black hover:text-accent">Blog</H5>
							</Link>
							<Link to="/story">
								<H5 className="text-black hover:text-accent">Our Story</H5>
							</Link>
						</Row>

						<div className="h-5 w-[1px] bg-dark-gray" />

						<Row className="items-center gap-16">
							<Link to="/shop">
								<i className="ri-search-line text-base ri-lg hover:text-accent" />
							</Link>
							<Link to="/shop">
								<i className="ri-shopping-cart-line ri-lg hover:text-accent" />
							</Link>
							<Link to="/shop">
								<i className="ri-user-line ri-lg hover:text-accent" />
							</Link>
						</Row>
					</Row>
				</Row>
			</nav>
		</>
	);
});
