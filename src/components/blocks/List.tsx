import clsx from "clsx";
import React from "react";

export const UnorderedList = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<ul
			className={clsx("leading-relaxed mb-2 list-disc list-inside", className)}
		>
			{children}
		</ul>
	);
};

export const OrderedList = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return (
		<ol
			className={clsx(
				"leading-relaxed mb-2 list-decimal list-inside",
				className
			)}
		>
			{children}
		</ol>
	);
};

export const ListItem = ({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) => {
	return <li className={clsx(className)}>{children}</li>;
};
