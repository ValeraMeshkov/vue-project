<template>
  <div id="app">
    <Cards/>
  </div>
</template>

<script>
  import Cards from './Cards/Cards.vue';

  export default {
    name: 'App',
    components: {
      Cards
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
