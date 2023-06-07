import { Image } from "@components/image";
import { Column, Row } from "@components/layout";
import { H4 } from "@components/typography";
import { randomImgUrl } from "@utilities";

const ItemCart = () => {
	return (
		<Row className="p-4 gap-4">
			<div className="w-[100px] h-[140px] rounded-md overflow-hidden p-2 bg-blue-100 flex justify-center items-center">
				<Image src={randomImgUrl()} />
			</div>
			<Column className="flex-grow">
				<H4>Áo thun nam</H4>
				<H4>Giá: 100.000đ</H4>
				<H4>Số lượng: 1</H4>
			</Column>
			<Row>
				<div onClick={() => null} className="cursor-pointer">
					<i className="ri-close-fill ri-2x"></i>
				</div>
			</Row>
		</Row>
	);
};

export default ItemCart;
