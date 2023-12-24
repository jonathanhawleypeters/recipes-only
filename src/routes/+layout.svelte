<script>
  import { goto } from '$app/navigation';
  import { search } from './search/store';

  const focus = () => {
    if (window.location.pathname !== '/search')
    goto('/search', { keepFocus: true })
  };
</script>

<div class="header">
  <a id="title" href="/">
    <h1>Recipes Only</h1>
  </a>
  
  <div>
    <input on:focus={focus} id="search" placeholder="search" type="text" bind:value={$search} />
  </div>
</div>

<slot></slot>

<style>
  .header {
    display: flex;
    justify-content: space-between;
  }
  input {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
</style>