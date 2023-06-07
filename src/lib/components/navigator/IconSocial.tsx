import { joinCls } from "@utilities";
import React from "react";

interface IconSocialProps {
	icon: any;
	className?: string;
}

const IconSocial = ({ icon, className }: IconSocialProps) => {
	return <div className={joinCls("rounded-full bg-blue-900 w-10 h-10 flex justify-center items-center", className)}>{icon}</div>;
};

export default IconSocial;
