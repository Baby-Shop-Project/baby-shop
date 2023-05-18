import { Column, H3, Image, Overlay, Text } from "@components";
import { joinCls, randomImgUrl } from "@utilities";
import { forwardRef } from "react";

export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(({ imageUrl, name, price, className, children, ...props }, ref) => {
	return (
		<Column ref={ref} className={joinCls(className)} {...props}>
			<div className="relative rounded-lg overflow-hidden">
				<Image src={imageUrl} className="w-full h-96" />
				<Overlay className="opacity-0 cursor-pointer hover:opacity-100">
					<Column className="h-full justify-end">
						<Text className="text-center text-lg py-4 bg-white-alpha-600 hover:bg-white-alpha-800" onClick={() => {}}>
							ADD TO CART
						</Text>
					</Column>
				</Overlay>
				{/* <Overlay className="opacity-0">
									<Center className="w-full h-full bg-white-alpha-800">
										<Row className="gap-8 text-2xl">
											<i className="ri-shopping-cart-line" />
											<i className="ri-eye-line" />
											<i className="ri-heart-line" />
										</Row>
									</Center>
								</Overlay> */}
			</div>
			<H3 className="text-black mt-6">{name}</H3>
			<Text className="text-accent mt-2">{price}</Text>
		</Column>
	);
});
