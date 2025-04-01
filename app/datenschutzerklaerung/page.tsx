import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
	return (
		<article>
			<h2>I. The Data Processor</h2>
			<p>
				Welcome to my Privacy Policy. This document explains how I handle your personal data. I am
				Marcello Curto, the individual responsible for processing your personal data. Should you
				wish to contact me, feel free to do so via my email:{" "}
				<a href="mailto:contact-from-web@marcellocurto.com">contact-from-web@marcellocurto.com</a>.
				For further contact details, please refer to the{" "}
				<strong>
					<Link href="https://marcellocurto.com/imprint">Imprint</Link>
				</strong>{" "}
				on my website.
			</p>
			<p>
				<strong>Personal data</strong> encompasses all information that could personally identify
				you, ranging from names and contact information (such as phone numbers, physical addresses,
				and email addresses) to your digital footprint, including your IP address.
			</p>
			<p>
				The processing of this information is regulated under the EU General Data Protection
				Regulation (GDPR), to which I strictly adhere.
			</p>

			<h2>II. Data Collection on This Website</h2>

			<h3>1. Access Data and Log Files</h3>
			<p>
				For visitors who browse my website without registering or otherwise submitting information,
				I collect only the data that your browser sends to my server, which is essential for
				technical purposes. This includes:
			</p>
			<ul>
				<li>Your IP address</li>
				<li>The website from which you navigated to my site</li>
				<li>The specific pages accessed (URL)</li>
				<li>The date and time of your visit</li>
				<li>Your device&apos;s operating system and browser version (User-Agent)</li>
			</ul>
			<p>
				While this data is transmitted to my server, only specific information is stored in log
				files, and IP addresses are retained solely for security purposes.
			</p>
			<p>
				The primary purposes for collecting this data include ensuring the seamless operation of the
				website, facilitating a user-friendly experience, maintaining system security and stability,
				and other administrative functions.
			</p>

			<h3>2. Cookies</h3>
			<p>My website does not employ cookies for tracking purposes or storing user data.</p>

			<h3>3. Website Hosting</h3>
			<p>
				Third-party providers within the European Union offer services related to hosting and
				displaying the website and provide infrastructure services, computing capacity, storage,
				databases, maintenance, and security services. Additionally, the domain name for this
				website was registered through Vercel Inc., located in the United States, but BunnyWay
				d.o.o., located in Slovenia, is used as the DNS provider.
			</p>
			<p>These infrastructure and service providers are:</p>
			<p>
				netcup GmbH
				<br />
				Daimlerstrasse 25
				<br />
				76185 Karlsruhe
				<br />
				Germany
			</p>
			<p>
				Hetzner Online GmbH
				<br />
				Industriestr. 25
				<br />
				91710 Gunzenhausen
				<br />
				Germany
			</p>
			<p>
				BunnyWay d.o.o.
				<br />
				Dunajska cesta 165
				<br />
				1000 Ljubljana
				<br />
				Slovenia
			</p>
			<p>
				Vercel Inc.
				<br />
				340 S Lemon Ave #4133
				<br />
				Walnut, CA 91789
				<br />
				USA
			</p>

			<h3>4. Communication via Email</h3>
			<p>
				Your email address is collected primarily for communication purposes, respecting the
				principles of necessity and legitimate interest.
			</p>

			<h2>III. Data Retention Period</h2>
			<p>
				I adhere to the GDPR&apos;s guidelines, storing personal data only as long as necessary or
				as mandated by legal retention periods. Should legal obligations require, data processing
				may be limited rather than completely halted, ensuring data is only used for its intended
				purpose.
			</p>

			<h2>IV. Purpose and Legal Basis for Data Processing</h2>
			<p>
				The processing of your data occurs in compliance with the GDPR and the Federal Data
				Protection Act (BDSG), with the specific legal basis depending on the context in which your
				data is obtained.
			</p>

			<h2>V. Disclosure of Personal Data</h2>
			<p>
				Your IP address is automatically shared with servers when you visit a website, including
				third-party components embedded on this site.
			</p>

			<h2>VI. Your Data Protection Rights</h2>
			<p>Under the GDPR, you have the following rights:</p>
			<ul>
				<li>Right to access your personal data</li>
				<li>Right to rectification of inaccurate data</li>
				<li>Right to erasure (&quot;right to be forgotten&quot;)</li>
				<li>Right to data portability</li>
				<li>Right to restrict processing</li>
				<li>Right to object to processing</li>
			</ul>

			<h2>VII. Withdrawal of Consent</h2>
			<p>
				You are entitled to withdraw any previously given consent regarding your personal data,
				affecting only future processing activities.
			</p>

			<h2>VIII. Amendments to This Data Protection Declaration</h2>
			<p>
				Should there be a change in the legal framework, my online offerings, or my data collection
				practices, this data protection declaration might be updated, subject to your consent where
				necessary.
			</p>
		</article>
	);
}
