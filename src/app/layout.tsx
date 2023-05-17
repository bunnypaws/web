import clsx from "clsx";
import React from "react";

import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Metadata } from "next";

import { Layout } from "../components/layout";

import "tailwindcss/tailwind.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: "400",
	style: ["normal", "italic"],
	variable: "--font-ibm-plex-mono",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="en"
			className={clsx(
				"bg-slate-900 text-slate-200",
				inter.variable,
				ibmPlexMono.variable
			)}
		>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
};

export const metadata: Metadata = {
	title: {
		template: "%s | bunny winter",
		default: "bunny winter",
	},
};

export default RootLayout;
