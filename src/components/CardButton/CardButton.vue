<template>
  <div class="button">
    <button @click="openDescription()">{{name}}</button>
  </div>
</template>

<script>
  export default {
    name: 'CardButton',
    props: {
      name: String
    },
    methods: {
      openDescription() {
         this.$emit('showDescription');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: calc(100% - 22px);
    margin: 0 auto;

    button {
      margin: 2px 0 0;
      padding: 0;
      width: 100%;
      height: 30px;
      border: 1px solid #EFEFEF;
      color: #CBCBCB;
      font-size: 11px;
      text-transform: capitalize;
      cursor: pointer;

      &:hover {
        border: 1px solid #CBCBCB;
        color: #a7a7a7;
      }
    }
  }
</style>
