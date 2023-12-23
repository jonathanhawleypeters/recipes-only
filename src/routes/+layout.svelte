<div class="header">
  <a href="/">
    <h1>Recipes Only</h1>
  </a>
  
  <div>
    <style>
      input {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    </style>
    <input type="text" placeholder="search" />
  </div>
</div>

<slot></slot>

<style>
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>