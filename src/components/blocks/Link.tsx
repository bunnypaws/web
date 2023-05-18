import clsx from "clsx";
import React, { JSXElementConstructor } from "react";

import NextLink from "next/link";

import moduleCss from "./Link.module.css";

export const Link = ({
	children,
	href,
	className,
	onClick,
}: {
	children?: React.ReactNode;
	href?: string;
	className?: string;
	onClick?: () => void;
}) => {
	const squiggleStyle = {
		"--squiggle-svg": 'url("/squiggle.svg?c=06b6d4")',
	} as React.CSSProperties;

	const Element = href ? NextLink : "a";

	return (
		<Element
			href={href}
			className={clsx(
				"border-b hover:border-none hover:bg-repeat-x",
				"text-cyan-500 border-cyan-500 cursor-pointer",
				moduleCss.link,
				className
			)}
			style={squiggleStyle}
			onClick={onClick}
		>
			{children}
		</Element>
	);
};
