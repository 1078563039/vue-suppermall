<template>
  <div class="goodsList">
    <goodsItem class="goodsItem" v-for="item in goods" :simpleItem="item"/>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import goodsItem from "./goodsItem"

  export default {
    name: 'goodsList',
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      goodsItem
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 10px;
  }

  /*.goodsItem{
    flex: 1;
  }*/
</style>
