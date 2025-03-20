import { Link } from "@/components/links";

export function Footer() {
	return (
		<footer className="flex flex-col gap-6 rounded-lg bg-zinc-200 px-8 pt-16 pb-6 text-sm">
			<FooterSection>
				<Link href="/datenschutzerklaerung">Datenschutzerklärung</Link>
				<Link href="/impressum">Impressum</Link>
			</FooterSection>
			<FooterSection>
				<Link href="https://marcellocurto.com" target="_blank">
					Ein Projekt von Marcello Curto
				</Link>

				<Link href="https://roark.at" target="_blank">
					Webseite von ROARK GmbH
				</Link>
			</FooterSection>
		</footer>
	);
}

function FooterSection({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-col gap-1">{children}</div>;
}
