<script>
  import { search } from './store';
  import elasticlunr from '../../lib/elasticlunr.js';
  import searchIndex from '../../search-index.json';

  const index = elasticlunr.Index.load(searchIndex);

  $: lunrResults = index.search($search, { bool: "AND", expand: true })
    .map(result => result.doc);
</script>

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