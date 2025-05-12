import * as db from '$lib/server/postsDatabase';

export async function load({ params }) {
  const posts = db.getByYearMonth(params.ano, params.mes);
  return { posts, ano: params.ano, mes: params.mes };
}