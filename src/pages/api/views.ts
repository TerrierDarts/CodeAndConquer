import { promises as fs } from 'fs';
import path from 'path';

const VIEWS_FILE = path.resolve('page-views.json');

// Load the views from the file
async function loadViews() {
  try {
    const data = await fs.readFile(VIEWS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading views file:', err);
    return {}; // Return an empty object if there is an issue
  }
}

// Save the updated views back to the file
async function saveViews(views: Record<string, number>) {
  try {
    await fs.writeFile(VIEWS_FILE, JSON.stringify(views, null, 2));
  } catch (err) {
    console.error('Error writing views file:', err);
  }
}

// POST request to update views count
export async function POST({ request }: { request: Request }) {
    let body;
    try {
      body = await request.json();
      console.log('Received body:', body);  // Log the received body to confirm
    } catch (err) {
      console.error('Error parsing JSON body:', err);
      return new Response('Invalid JSON in request body', { status: 400 });
    }
  
    if (!body || !body.pathname) {
      console.error('Missing pathname in request body');
      return new Response('Missing pathname', { status: 400 });
    }
  
    const pageViews = await loadViews();
    pageViews[body.pathname] = (pageViews[body.pathname] || 0) + 1;
  
    await saveViews(pageViews);
  
    return new Response(JSON.stringify({ views: pageViews[body.pathname] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
// GET request to fetch the current views for a page
export async function GET({ url }: { url: URL }) {
  const pathname = url.searchParams.get('pathname');

  if (!pathname) {
    return new Response('Missing pathname', { status: 400 });
  }

  const pageViews = await loadViews();
  const views = pageViews[pathname] || 0;

  return new Response(JSON.stringify({ views }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
