import type { APIRoute, APIContext } from "astro";

export const prerender = false; // Don't prerender this route

export const GET: APIRoute = async ({ url, locals }: APIContext & { locals: { runtime: { env: { PAGE_VIEWS: any } } } }) => {
  const kv = locals.runtime.env.PAGE_VIEWS;

  const path = url.searchParams.get("path");
  if (!path) {
    return new Response("Missing `path` query param", { status: 400 });
  }

  const key = `views:${path}`;
  const stored = await kv.get(key);
  const count = stored ? parseInt(stored) : 0;

  const newCount = count + 1;
  await kv.put(key, newCount.toString());

  return new Response(JSON.stringify({ count: newCount }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
