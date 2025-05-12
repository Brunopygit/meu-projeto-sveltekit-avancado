import * as db from '$lib/server/postsDatabase';

export async function load({ url }) {
  console.log(url);
  const title = url.searchParams.get('title') || null;
  const content = url.searchParams.get('content') || null;

  if (!title && !content) return { posts: db.getAll() };

  return { posts: db.getByQuery(title, content) };
}