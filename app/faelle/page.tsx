import { getActiveCasesRecords } from "@/lib/airtable/records";

export default async function Home() {
	const records = await getActiveCasesRecords();
	console.log(records);
	return (
		<div className="flex flex-col items-center justify-center gap-8 p-12">
			<h1 className="text-4xl font-bold">Fälle</h1>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{records.map(({ id, fields }) => (
					<div className="flex flex-col gap-6 rounded-lg bg-zinc-200 p-4" key={id}>
						<h2 className="text-lg leading-tight font-bold">{fields.name}</h2>
						<div className="flex flex-col gap-1">
							{fields.summary && <p>{fields.summary}</p>}
							{fields.status && <p>{fields.status}</p>}
							{fields.dpa && <p>{fields.dpa}</p>}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
