import clsx from "clsx";
import React from "react";

export const Text = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={clsx("leading-relaxed mb-2", className)}>{children}</div>
	);
};

export const Bold = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <span className={clsx("font-bold", className)}>{children}</span>;
};

export const Italic = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <span className={clsx("italic", className)}>{children}</span>;
};
