import clsx from "clsx";
import React from "react";

import NextLink from "next/link";

import moduleCss from "./Link.module.css";

export const Link = ({
	children,
	href,
	className,
}: {
	children?: React.ReactNode;
	href: string;
	className?: string;
}) => {
	const squiggleStyle = {
		"--squiggle-svg": 'url("/squiggle.svg?c=06b6d4")',
	} as React.CSSProperties;

	return (
		<NextLink
			href={href}
			className={clsx(
				"border-b hover:border-none hover:bg-repeat-x",
				"text-cyan-500 border-cyan-500",
				moduleCss.link,
				className
			)}
			style={squiggleStyle}
		>
			{children}
		</NextLink>
	);
};
