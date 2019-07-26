<template>
  <div class="cards">
    <ul class="cards__list">
      <li v-for="card in cards" class="cards__list__card" :key="card.id">
        <Card :card="card"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions} from 'Vuex';
  import Card from '../Card/Card.vue';

  export default {
    name: 'Cards',
    components: {
      Card
    },
    methods : {
      ...mapActions({
        getCards : 'getCards',
      })
    },
    mounted(){
      this.getCards({http: this.$http});
    },
    computed: {
      ...mapState([
        'cards'
      ])
    },
  }
</script>


<style lang="scss" scoped>
  .cards {
    margin-top: 50px;

    &__list {
      &__card {
        position: relative;
        border: 1px solid #D4D4D5;
        width: 300px;
        height: 420px;
        margin: 5px 10px;
      }
    }
  }
</style>
