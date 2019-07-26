<template>
  <div class="data">
    <div class="data__heading">
      <span class="data__heading__title">Items</span>
      <div class="data__heading__property">
        <span>level</span>
        <span>cost</span>
        <span>chance</span>
      </div>
    </div>

    <ul class="data__list">
      <li v-for="item in items" class="data__list__heading">
        <span class="data__list__heading__title">{{item.name}}</span>
        <div class="data__list__heading__property">
          <span>{{item.level}}</span>
          <span>{{item.cost}}</span>
          <span>{{item.chance}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CardData',
    props: {
      items: Array
    }
  }
</script>

<style lang="scss" scoped>
  .data {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 240px;
    width: 100%;

    &__heading {
      position: absolute;
      box-sizing: border-box;
      height: 35px;
      top: 0;
      padding: 5px;
      width: calc(100% - 10px);
      margin: 0 auto;
      border-bottom: 1px solid #D4D4D5;
      display: flex;
      text-transform: capitalize;
      font-weight: 900;
      font-size: 12px;

      &__title {
        display: flex;
        align-items: center;
        text-align: left;
        width: 55%;
        height: 100%;
      }

      &__property {
        margin: 0;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__list {
      position: relative;
      margin: 30px 5px 0;
      height: 200px;
      width: 100%;
      overflow-y: scroll;

      &__heading {
        min-height: 25px;
        margin: 5px;
        padding: 4px;
        border-bottom: 1px solid #D4D4D5;
        display: flex;
        align-items: center;
        text-transform: capitalize;
        font-size: 12px;
        line-height: 14px;

        &__title {
          display: flex;
          align-items: center;
          text-align: left;
          width: 50%;
          height: 100%;
        }

        &__property {
          margin: 0;
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }

</style>
