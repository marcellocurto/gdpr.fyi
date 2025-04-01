import { Link } from "@/components/links";
import { PageLayout, H3, P, PageTitle } from "@/components/page";
import { Metadata } from "next";

const title = "Imprint";

export const metadata: Metadata = {
	title,
};

export default function ImprintPage() {
	return (
		<PageLayout>
			<PageTitle>{title}</PageTitle>
			<P>
				<strong>Responsible for content:</strong>
			</P>
			<P>
				<strong>Marcello Curto</strong>
				<br />
				Elßlergasse 20/4
				<br />
				1130 Vienna
				<br />
				Austria
			</P>
			<P>
				<Link href="mailto:contact-from-web@marcellocurto.com">
					contact-from-web@marcellocurto.com
				</Link>
			</P>

			<H3>Copyright</H3>
			<P>
				Should you desire to employ my images or the results of my work, I invite you to reach out
				to me directly. The contents and creations found on this website are protected under the
				scope of Austrian Copyright Law. Any form of reproduction, modification, dissemination, or
				utilization that extends beyond the bounds expressly permitted by copyright legislation
				necessitates my prior written consent.
			</P>
			<P>
				In instances where this website showcases content not originated by myself, the copyrights
				of third-parties are duly acknowledged and their contributions clearly indicated as such.
				Should you encounter any content that infringes upon copyright, I implore you to inform me.
				Upon notice of any legal violations, I shall endeavour to remove the implicated content
				forthwith.
			</P>

			<H3>
				Alternative Dispute Resolution in Accordance with Article 14(1) of the ODR Regulation and §
				36 of the VSBG
			</H3>
			<P>
				The European Commission avails a platform for online dispute resolution (ODR), accessible at{" "}
				<a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
					http://ec.europa.eu/consumers/odr/
				</a>
				. It is pertinent to note, however, that I am neither obliged nor inclined to engage in
				dispute resolution proceedings before a consumer arbitration service.
			</P>

			<H3>Objection to Unsolicited Advertising Emails</H3>
			<P>
				In accordance with Article 21 of the GDPR, the use of contact details (published in
				adherence to imprint obligations) for the transmission of unsolicited advertising and
				informational materials is hereby expressly forbidden. Should there be an unauthorized
				dispatch of advertising information, particularly through spam emails or unsolicited postal
				advertisements, I reserve the right to initiate legal proceedings.
			</P>
		</PageLayout>
	);
}
