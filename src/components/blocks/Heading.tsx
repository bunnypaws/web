import clsx from "clsx";
import React from "react";

export const Heading = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<h1
			className={clsx("leading-relaxed mb-2 font-bold text-center", className)}
		>
			{children}
		</h1>
	);
};
