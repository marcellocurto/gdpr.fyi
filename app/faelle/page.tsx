import { getActiveCasesRecords } from "@/lib/airtable/records";
import { CalendarClock } from "lucide-react";

export default async function Home() {
	const records = await getActiveCasesRecords();
	console.log(records);
	return (
		<div className="flex flex-col items-center justify-center gap-8 p-12">
			<h1 className="text-4xl font-bold">Fälle</h1>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{records.map(({ id, fields }) => (
					<div className="flex w-full flex-col gap-6 rounded-lg bg-zinc-200 p-4" key={id}>
						<h2 className="text-lg leading-tight font-bold">{fields.name}</h2>
						<div className="flex flex-col justify-between gap-4">
							{fields.summary && <p>{fields.summary}</p>}
							{fields.dateStarted && (
								<div className="flex items-center gap-1">
									<CalendarClock className="size-4" />
									<p>{fields.dateStarted}</p>
								</div>
							)}
							{fields.status && (
								<div className="flex items-center gap-2">
									<p className="rounded-full bg-rose-300 px-3 py-1 text-sm">{fields.status}</p>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
