"use client";

import React from "react";
import { useToggle } from "../../lib/hooks";

import type { Variants } from "framer-motion";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "../blocks";

const menuVariants: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const menuItemVariants: Variants = {
	hidden: {
		opacity: 0,
		translateX: "-10px",
	},
	visible: {
		opacity: 1,
		translateX: 0,
	},
};

export const Menu = () => {
	const [isVisible, toggleMenu] = useToggle(false);

	return (
		<div className="flex gap-4 items-center h-16">
			<div>
				<Link onClick={toggleMenu}>{isVisible ? "close" : "menu"}</Link>
			</div>
			<AnimatePresence>
				{isVisible ? (
					<motion.div
						className="flex gap-4 items-center h-16"
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						<MenuItem href="/">home</MenuItem>
						<MenuItem href="/about">about</MenuItem>
						<MenuItem href="/contact">contact</MenuItem>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};

export const MenuItem = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => {
	return (
		<motion.div variants={menuItemVariants}>
			<Link href={href}>{children}</Link>
		</motion.div>
	);
};
