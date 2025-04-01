import { getRecords } from "easy-airtable-api";

export async function getDpaRecords() {
	return await getRecords<DpaFields>({
		apiKey: process.env.AIRTABLE_API_KEY!,
		baseId: process.env.AIRTABLE_DATENSCHUTZ_BASE_ID!,
		tableId: process.env.AIRTABLE_DPA_TABLE_ID!,
		options: { maxRecords: 5000 },
	});
}

export async function getCasesRecords() {
	return await getRecords<CasesFields>({
		apiKey: process.env.AIRTABLE_API_KEY!,
		baseId: process.env.AIRTABLE_DATENSCHUTZ_BASE_ID!,
		tableId: process.env.AIRTABLE_CASES_TABLE_ID!,
		options: { maxRecords: 5000 },
	});
}

export async function getActiveCasesRecords() {
	return await getRecords<CasesFields>({
		apiKey: process.env.AIRTABLE_API_KEY!,
		baseId: process.env.AIRTABLE_DATENSCHUTZ_BASE_ID!,
		tableId: process.env.AIRTABLE_CASES_TABLE_ID!,
		options: {
			maxRecords: 5000,
			filterByFormula: `{publish} = 1`,
		},
	});
}

type DpaFields = {
	name?: string;
	url?: string;
	country?: string[];
	state?: string[];
	address?: string[];
	email?: string[];
	phone?: string[];
	websites?: string[];
	judgements?: string[];
	cases?: string[];
};

type CasesFields = {
	name?: string;
	summary?: string;
	status?: string;
	dateStarted?: string;
	dateEnded?: string;
	dpa?: string[];
	publish?: boolean;
};
