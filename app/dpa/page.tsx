import { getDpaRecords } from '@/lib/airtable/records';

export default async function Home() {
  const records = await getDpaRecords();
  console.log(records);
  return (
    <div className='flex flex-col items-center justify-center p-12 gap-8'>
      <h1 className='text-4xl font-bold'>DPAs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {records.map((record) => (
          <div className='bg-zinc-200 rounded-lg p-4' key={record.id}>
            <h2 className='text-lg font-bold'>{record.fields.name}</h2>
            <p>{record.fields.URL}</p>
            <p>{record.fields.Land}</p>
            <p>{record.fields.Adresse}</p>
            <p>{record.fields['Name Beauftragte*r']}</p>
            <p>{record.fields['Kontakt Beauftragte*r']}</p>
            <p>{record.fields.Webseiten}</p>
            <p>{record.fields.Emails}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
