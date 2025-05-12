<script>
    let { data } = $props();
  </script>
  
  <form>
    <input type="text" name="title" placeholder="Busca por título..." />
    <input type="text" name="content" placeholder="Busca por conteúdo..." />
    <button type="submit">Buscar</button>
  </form>
  
  <h1>Busca de posts</h1>
  
  <ul>
    {#each data.posts as post}
      <li><a href="/03/posts/{post.slug}">{post.title}</a></li>
    {:else}
      <li>Nenhum resultado encontrado.</li>
    {/each}
  </ul>