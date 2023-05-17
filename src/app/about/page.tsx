import React from "react";

import { Metadata } from "next";
import { Page } from "../../components/layout";
import { Divider, Link, Bold, Text } from "../../components/blocks";

const About = () => {
	return (
		<Page>
			<Divider />
			<Text className="font-bold text-center">Credits</Text>
			<Text>
				Crystal ball icon from{" "}
				<Link href="https://sensa.co/emoji">Sensa Emoji</Link>
				<br />
				Powered by <Link href="https://vercel.com">Vercel</Link>
				<br />
				Built with &#9825; by Bunny Winter &mdash;{" "}
				<Link href="https://github.com/bunnypaws/web">code</Link> licensed AGPL
				3.0 or later.
			</Text>
		</Page>
	);
};

export const metadata: Metadata = {
	title: "about",
};

export default About;
