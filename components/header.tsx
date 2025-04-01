import { Link } from "@/components/links";

export function Header() {
	return (
		<header className="flex justify-between gap-6 bg-zinc-200 px-8 py-6 text-xl">
			<div>
				<Link className="font-black" href="/">
					gdpr.fyi
				</Link>
			</div>
			<div className="flex gap-6 font-bold">
				<Link href="/faelle">Fälle</Link>
				<Link href="/behoerden">Behörden</Link>
			</div>
		</header>
	);
}
