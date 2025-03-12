import { getDpaRecords } from '@/lib/airtable/records';

export default async function Home() {
  const records = await getDpaRecords();
  console.log(records);
  return (
    <div className='flex flex-col items-center justify-center p-12 gap-8'>
      <h1 className='text-4xl font-bold'>DPAs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {records.map(({ id, fields }) => (
          <div
            className='bg-zinc-200 rounded-lg gap-6 flex flex-col p-4'
            key={id}
          >
            <h2 className='text-lg font-bold leading-tight'>{fields.name}</h2>
            <div className='flex flex-col gap-1'>
              {fields.URL && <p>{fields.URL}</p>}
              {fields.Land && <p>{fields.Land}</p>}
              {fields.Adresse && <p>{fields.Adresse}</p>}
              {fields['Name Beauftragte*r'] && (
                <p>Beauftragte: {fields['Name Beauftragte*r']}</p>
              )}
              {fields['Kontakt Beauftragte*r'] && (
                <p>Kontakt: {fields['Kontakt Beauftragte*r']}</p>
              )}
              {fields.Webseiten && <p>Webseiten: {fields.Webseiten}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
