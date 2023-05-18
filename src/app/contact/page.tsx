import React from "react";

import { Metadata } from "next";
import { Page } from "../../components/layout";
import { Heading, Text } from "../../components/blocks";

const Contact = () => {
	return (
		<Page>
			<Heading>Get in touch</Heading>
			<Text>
				Email me at bunny [at] wintr [dot] family - I&apos;ll do my best to get
				back to you within the day.
			</Text>
			<Text>
				If your email client doesn&apos;t like the .family TLD, mail [at]
				bunnywinter [dot] com aliases to the same mailbox.
			</Text>
		</Page>
	);
};

export const metadata: Metadata = {
	title: "contact",
};

export default Contact;
