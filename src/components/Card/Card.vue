<template>
  <div>

    <div v-if="!showInfo"
         class="image"
         :style="{ backgroundImage: `url(${base64}${card.image})`}">
      <img :src="imgSrc" @click="showInfo = !showInfo" class="image__gift"/>
    </div>
    <CardData v-else :items="card.items"/>

    <CardInfo :card="card"/>
    <CardButton @showDescription="showInfo = !showInfo" name="explain"/>
  </div>
</template>

<script>
  import CardData from '../CardData/CardData.vue';
  import CardInfo from '../CardInfo/CardInfo.vue';
  import CardButton from '../CardButton/CardButton.vue';

  export default {
    name: 'Card',
    props: {
      card: Object
    },
    components: {
      CardData,
      CardInfo,
      CardButton
    },
    data() {
      return {
        base64: 'data:image/svg+xml;base64,',
        imgSrc: 'https://www.stickees.com/files/love/gifts/458-yellow-and-red-gift-box.png',
        showInfo: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;

    &__gift {
      position: absolute;
      width: auto;
      height: 90%;
      cursor: pointer;
    }
  }
</style>
