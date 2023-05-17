import React from "react";

import Image from "next/image";
import NextLink from "next/link";
import { Link } from "../blocks";

import crystalBall from "../../assets/images/crystal_ball.svg";

export const Header = () => {
	return (
		<div className="flex justify-between items-center py-2 mb-6">
			<NextLink href="/">
				<Image
					src={crystalBall}
					alt="bunny winter"
					width={32}
					height={32}
				/>
			</NextLink>
			<Link href="/about">about</Link>
			<Link href="/contact">contact</Link>
		</div>
	);
};
