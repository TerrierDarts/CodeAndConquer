import fs from 'fs/promises';
import path from 'path';

const viewsFile = path.resolve('././data/page-views.json');

export async function GET({ url }: { url: URL }) {
  const pathname = url.searchParams.get('pathname');
  if (!pathname) {
    return new Response('Missing pathname', { status: 400 });
  }

  const data = await readViews();
  const views = data[pathname] || 0;

  return new Response(JSON.stringify({ views }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST({ request }: { request: Request }) {
  const { pathname } = await request.json();
  if (!pathname) {
    return new Response('Missing pathname', { status: 400 });
  }

  const data = await readViews();
  data[pathname] = (data[pathname] || 0) + 1;
  await saveViews(data);

  return new Response(JSON.stringify({ views: data[pathname] }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function readViews() {
  try {
    const text = await fs.readFile(viewsFile, 'utf-8');
    return JSON.parse(text);
  } catch (err) {
    return {};
  }
}

async function saveViews(data: any) {
  console.log('viewsFile', viewsFile);
  await fs.writeFile(viewsFile, JSON.stringify(data, null, 2));
}
