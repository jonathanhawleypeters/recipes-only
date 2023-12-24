<script>
  import { search } from './store';
  import elasticlunr from '../../lib/elasticlunr.js';
  import searchIndex from '../../search-index.json';

  const index = elasticlunr.Index.load(searchIndex);

  $: lunrResults = index.search($search, { bool: "AND", expand: true })
    .map(result => result.doc);
</script>

<svelte:head>
  <title>Recipe Search</title>
  <meta name="description" content="Search for all kinds of recipes." />
</svelte:head>

<div class="search-results">
  <h2>{lunrResults.length} search results</h2>
  <ul>
    {#each lunrResults as { slug, title, description }}
      <li>
        <a href={slug}>{title}</a>
        <p class="subtitle">{description}</p>
      </li>
    {/each}
  </ul>
</div>