<template>
  <div class="cart-list">
    <scroll class="content">
      <cartItem v-for="item in cartList" :cartListItem="item"/>
    </scroll>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import cartItem from "./cartItem"
  import scroll from "components/common/scroll/scroll"

  export default {
    name: 'cartList',
    components: {
      cartItem,
      scroll
    },
    data() {
      return {}
    },
    props: {
      cartList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .cart-list{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }

  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
