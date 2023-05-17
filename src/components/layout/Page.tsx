import clsx from "clsx";
import React from "react";

export const Page = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return <div className={clsx("flex-1", className)}>{children}</div>;
};
