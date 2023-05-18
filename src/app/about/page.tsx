import clsx from "clsx";
import React from "react";

import { Metadata } from "next";
import Image from "next/image";
import { Page } from "../../components/layout";
import {
	Callout,
	Divider,
	Heading,
	Link,
	Italic,
	Text,
	UnorderedList,
	ListItem,
} from "../../components/blocks";

import myspaceImage from "../../assets/images/myspace.jpg";

const About = () => {
	return (
		<Page>
			<div>
				<Heading>About me, and why I do what I do</Heading>
				<Text>
					Hi! I&apos;m Bunny Winter, a web developer from Kansas City, MO.
					I&apos;ve been coding in various languages since I was young, and have
					become proficient in most major Typescript web frameworks as an adult
					with a specialty in React.
				</Text>
				<Text>
					The Internet is constantly evolving, and it always has been. However,
					it seems that the pace of change has become exponential, leaving
					business owners unsure of how to enhance their web presence in the
					modern age.
				</Text>
				<Text>
					When the Web was new and novel, users expected things like slow load
					times and poor accessibility. Websites could be bodged together with
					glue and string and be just as enjoyable for the end user, because
					every other site was <Italic>also</Italic> a mess of half-broken
					Coldfusion code.
				</Text>
				<div className="max-w-sm mx-auto mt-4 mb-6">
					<Image
						src={myspaceImage}
						alt="The profile of Tom on Myspace"
					/>
				</div>
				<Text>
					Your users want speed now. They want websites to make sense to
					everyone. They want your website to look just as amazing on a phone
					screen as it would on a television. They want what the Internet can be
					at its full potential, and if you don&apos;t give it to them,
					you&apos;ll lose their interest.
				</Text>
				<Text>
					I believe we can bridge the gap between what people want and what they
					get, and I want to help make it happen. I want to help give your users
					the experience they deserve, and the experience you want them to have.
					I want to give the Internet back its magic.
				</Text>
			</div>
			<div>
				<Heading>What I bring to the table</Heading>
				<Text>
					I&apos;m familliar and have worked with the following technologies:
				</Text>
				<Callout className="grid grid-cols-2 gap-4">
					<div>
						<Heading className="!text-left">Frameworks:</Heading>
						<UnorderedList>
							<ListItem>React</ListItem>
							<ListItem>React Native</ListItem>
							<ListItem>Electron</ListItem>
							<ListItem>Next.js</ListItem>
							<ListItem>Vite</ListItem>
							<ListItem>express.js</ListItem>
						</UnorderedList>
					</div>
					<div>
						<Heading className="!text-left">Languages:</Heading>
						<UnorderedList>
							<ListItem>Javascript</ListItem>
							<ListItem>Typescript</ListItem>
							<ListItem>C-family languages</ListItem>
						</UnorderedList>
					</div>
					<div>
						<Heading className="!text-left">Software:</Heading>
						<UnorderedList>
							<ListItem>Adobe CC</ListItem>
							<ListItem>Figma</ListItem>
							<ListItem>Notion</ListItem>
						</UnorderedList>
					</div>
					<div>
						<Heading className="!text-left">Devtools:</Heading>
						<UnorderedList>
							<ListItem>PostgreSQL</ListItem>
							<ListItem>MariaDB</ListItem>
							<ListItem>MongoDB</ListItem>
						</UnorderedList>
					</div>
				</Callout>
				<Text>
					In addition, through past employers, I&apos;ve worked with clients
					including the U.S. Soybean Export Council, Be Human Project, Tecsys,
					and others.
				</Text>
			</div>
			<div>
				<Heading>Let&apos;s work together</Heading>
				<Text>
					I&apos;m available for full-time and freelance positions at the moment
					- you can <Link href="/contact">contact me</Link> and I&apos;ll get
					back to you within a day.
				</Text>
			</div>
			<Divider />
			<div>
				<Heading>Credits</Heading>
				<Text>
					Crystal ball icon from{" "}
					<Link href="https://sensa.co/emoji">Sensa Emoji</Link>
					<br />
					Powered by <Link href="https://vercel.com">Vercel</Link>
					<br />
					Built with &#9825; by Bunny Winter &mdash;{" "}
					<Link href="https://github.com/bunnypaws/web">code</Link> licensed
					AGPL 3.0 or later.
				</Text>
			</div>
		</Page>
	);
};

export const metadata: Metadata = {
	title: "about me",
	description:
		"Hi! I'm Bunny, a web developer from Kansas City, MO. " +
		"I've been coding in various languages since I was young, " +
		"and have become proficient in most major Typescript web " +
		"frameworks as an adult with a specialty in React.",
};

export default About;
