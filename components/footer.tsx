import Link from "next/link";

export function Footer() {
	return (
		<footer className="flex flex-col gap-6 rounded-lg bg-zinc-200 p-8">
			<div>
				<p>
					<Link href="https://marcellocurto.com" target="_blank">
						Ein Projekt von Marcello Curto
					</Link>
				</p>
				<p>
					<Link href="https://roark.at" target="_blank">
						Webseite von ROARK GmbH
					</Link>
				</p>
			</div>
		</footer>
	);
}
