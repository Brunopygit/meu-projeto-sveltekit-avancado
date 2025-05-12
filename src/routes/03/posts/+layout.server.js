import * as db from '$lib/server/postsDatabase';

export async function load() {
  const posts = db.getAll();
  return { posts };
}