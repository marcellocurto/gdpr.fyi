import { Link } from "@/components/links";

export function Header() {
	return (
		<header className="flex justify-between gap-6 rounded-lg bg-zinc-200 px-8 pt-6 pb-2 text-xl">
			<div>
				<Link className="font-black" href="/">
					gdpr.fyi
				</Link>
			</div>
			<div>
				<Link href="/impressum">Projekt</Link>
			</div>
		</header>
	);
}
