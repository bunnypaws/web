"use client";

import clsx from "clsx";
import React from "react";

import { Lenis as ReactLenis } from "@studio-freight/react-lenis";
import { Header } from "./Header";

export const Layout = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<ReactLenis root>
			<div
				className={clsx(
					"max-w-prose mx-auto px-4 py-12",
					"flex flex-col",
					className
				)}
			>
				<Header />
				{children}
			</div>
		</ReactLenis>
	);
};
