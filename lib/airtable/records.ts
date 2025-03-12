import { getRecords } from 'easy-airtable-api';

export async function getDpaRecords() {
  return await getRecords<DpaFields>({
    apiKey: process.env.AIRTABLE_API_KEY!,
    baseId: process.env.AIRTABLE_DATENSCHUTZ_BASE_ID!,
    tableId: process.env.AIRTABLE_DPA_TABLE_ID!,
    options: { maxRecords: 5000 },
  });
}

type DpaFields = {
  name?: string;
  URL?: string;
  Land?: string[];
  Bundesland?: string[];
  'Regionale Behörden?'?: string[];
  Adresse?: string[];
  Email?: string[];
  Telefon?: string[];
  'Name Beauftragte*r'?: string[];
  'Kontakt Beauftragte*r'?: string[];
  'Infos aus Anruf'?: string[];
  Webseiten?: string[];
  Emails?: string[];
  Urteile?: string[];
};
