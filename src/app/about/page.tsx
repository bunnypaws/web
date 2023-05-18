import React from "react";

import { Metadata } from "next";
import { Page } from "../../components/layout";
import { Divider, Heading, Link, Italic, Text } from "../../components/blocks";

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
				<Text>
					If you share these desires, I&apos;d love to hear from you. You can{" "}
					<Link href="/contact">contact me here</Link>, and I&apos;ll get back
					to you within a day.
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
	title: "about",
};

export default About;
