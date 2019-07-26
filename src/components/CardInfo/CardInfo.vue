<template>
  <div class="information">
    <p class="information__title">{{card.name}}</p>
    <div class="information__top">
      <div>
        <p class="information__top__date">{{getDate(card.start)}}</p>
        <p class="information__top__name">start</p>
      </div>
      <div>
        <p class="information__top__date">{{getDate(card.end)}}</p>
        <p class="information__top__name">end</p>
      </div>
    </div>
    <p class="information__description">
      {{card.description}}
    </p>
    <div class="information__bottom">
      <div>
        <p class="information__bottom__item">{{card.items.length}}</p>
        <p class="information__bottom__name">items</p>
      </div>
      <div>
        <p class="information__bottom__item">{{chanceTotal(card.items)}}</p>
        <p class="information__bottom__name">chancetotal</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CardInfo',
    props: {
      card: Object
    },
    methods: {
      chanceTotal(items){
        let chanceTotalCount = 0;
        items.forEach(item => {
          chanceTotalCount += item.chance
        });
        return chanceTotalCount
      },
      getDate(value) {
        let date = new Date(value);
        let changeDate = val => String(val).length < 2 ? `0${val}` : val;
        return `${changeDate(date.getDate())}-${changeDate(date.getMonth() + 1)}-${date.getFullYear()}`;
      }
    }
  }

</script>

<style lang="scss" scoped>
  .main{
    min-height: 100vh;
    position: relative;
    margin-top: 110px;
    width: 100%;
  }

  .information {
    margin: 0;
    padding: 0 6px;

    &__title {
      margin: 8px 0 0;
      font-weight: 900;
      font-size: 15px;

      &::after {
        content: '..'
      }
    }

    &__top {
      display: flex;
      justify-content: space-around;
      margin-top: 4px;

      div {
        width: 50%;
        line-height: 17px;
      }
      &__date {
        margin: 0;
        color: #56C565;
        font-weight: bold;
        font-size: 16px;
      }
      &__name {
        margin: 0;
        font-weight: 900;
        font-size: 12px;
        text-transform: uppercase;
      }
    }

    &__description {
      margin: 3px 10px 0;
      height: 33px;
      text-align: left;
      font-size: 12px;
      line-height: 16px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &__bottom {
      display: flex;
      justify-content: space-around;

      div {
        width: 50%;
        line-height: 17px;
      }
      &__item {
        margin: 0;
        color: #2E85D0;
        font-weight: bold;
        font-size: 17px;
      }
      &__name {
        margin: 0;
        font-weight: 900;
        font-size: 11px;
        text-transform: uppercase;
      }
    }
  }

</style>
