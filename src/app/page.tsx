import React from "react";

import { Metadata } from "next";
import { Page } from "../components/layout";
import { UnorderedList, ListItem, Link, Text } from "../components/blocks";

const Index = () => {
	return (
		<Page>
			<Text>
				Hi! I&apos;m Bunny, a web developer from Kansas City, MO. I&apos;ve been
				coding in various languages since I was young, and have become
				proficient in most major Typescript web frameworks as an adult with a
				specialty in React.
			</Text>
			<Text>
				This website serves as a portfolio / resume for my professional work.
			</Text>
			<Text>
				<Link href="/about">More about me &rarr;</Link>
				<br />
				<Link href="/contact">Get in touch &rarr;</Link>
			</Text>
		</Page>
	);
};

export const metadata: Metadata = {
	title: "bunny winter",
	description:
		"Hi! I'm Bunny, a web developer from Kansas City, MO. " +
		"I've been coding in various languages since I was young, " +
		"and have become proficient in most major Typescript web " +
		"frameworks as an adult with a specialty in React.",
};

export default Index;
