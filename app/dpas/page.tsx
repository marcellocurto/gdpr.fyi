import { getDpaRecords } from "@/lib/airtable/records";

export default async function Home() {
	const records = await getDpaRecords();
	console.log(records);
	return (
		<div className="flex flex-col items-center justify-center gap-8 p-12">
			<h1 className="text-4xl font-bold">DPAs</h1>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{records.map(({ id, fields }) => (
					<div className="flex flex-col gap-6 rounded-lg bg-zinc-200 p-4" key={id}>
						<h2 className="text-lg leading-tight font-bold">{fields.name}</h2>
						<div className="flex flex-col gap-1">
							{fields.URL && <p>{fields.URL}</p>}
							{fields.Land && <p>{fields.Land}</p>}
							{fields.Adresse && <p>{fields.Adresse}</p>}

							{fields.Webseiten && <p>Webseiten: {fields.Webseiten}</p>}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
