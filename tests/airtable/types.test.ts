import { expect, test } from 'bun:test';
import { generateTypeScriptDefinitions } from 'easy-airtable-api';

test('should generate TypeScript definitions', async () => {
  const types = await generateTypeScriptDefinitions({
    apiKey: process.env.AIRTABLE_API_KEY!,
    baseId: process.env.AIRTABLE_DATENSCHUTZ_BASE_ID!,
    tableNameOrId: process.env.AIRTABLE_DPA_TABLE_ID!,
  });
  console.log(types);
  expect(types).toBeDefined();
  expect(typeof types).toBe('string');
});
