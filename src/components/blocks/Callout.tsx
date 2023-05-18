import clsx from "clsx";
import React from "react";

export const Callout = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				"bg-slate-700 border border-slate-500",
				"p-4 mb-2",
				className
			)}
		>
			{children}
		</div>
	);
};
