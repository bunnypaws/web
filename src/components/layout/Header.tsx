import React from "react";

import Image from "next/image";
import { Menu } from "./Menu";

import crystalBall from "../../assets/images/crystal_ball.svg";

export const Header = () => {
	return (
		<div className="flex gap-4 items-center h-16 mb-6">
			<Image
				src={crystalBall}
				alt="bunny winter"
				width={48}
				height={48}
				priority={true}
			/>
			<Menu />
		</div>
	);
};
