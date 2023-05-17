import clsx from "clsx";
import React from "react";

export const Divider = ({ className }: { className?: string }) => {
	return <hr className={clsx("w-full my-4 bg-slate-200", className)} />;
};
