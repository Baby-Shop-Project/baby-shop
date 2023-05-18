import { defineMessages } from "react-intl";

const SCOPE = "Navigator";

export const navigatorMessages = defineMessages<string, MessageItem, MessageCollection>({
	home: {
		id: `${SCOPE}.home`,
		en: "Home",
		vi: "Trang chủ",
	},
});
