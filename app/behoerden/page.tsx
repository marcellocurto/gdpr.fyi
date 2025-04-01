import { getDpaRecords } from "@/lib/airtable/records";

export default async function Home() {
	const records = await getDpaRecords();
	records.sort((a, b) => {
		const countryA = typeof a?.fields.country === "string" ? a.fields.country : "";
		const countryB = typeof b?.fields.country === "string" ? b.fields.country : "";
		const countryComparison = countryA.localeCompare(countryB);

		if (countryComparison !== 0) {
			return countryComparison;
		}

		const nameA = a?.fields.name ?? "";
		const nameB = b?.fields.name ?? "";
		return nameA.localeCompare(nameB);
	});

	return (
		<div className="flex flex-col items-center justify-center gap-8 p-12">
			<h1 className="text-4xl font-bold">Behörden</h1>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{records.map(({ id, fields }) => (
					<div className="flex flex-col gap-6 rounded-lg bg-zinc-200 p-4" key={id}>
						<h2 className="text-lg leading-tight font-bold">{fields.name}</h2>
						<div className="flex flex-col gap-1">
							{fields.url && <p>{fields.url}</p>}
							{fields.address && <p>{fields.address}</p>}
							{fields.country && <p>{fields.country}</p>}
							{fields.websites && <p>Webseiten: {fields.websites}</p>}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
