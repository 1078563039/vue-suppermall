<template>
  <div class="cart">
    <navbar class="cart-navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <cartList :cartList="cartList"/>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import navbar from "components/common/navbar/navbar.vue"
  import cartList from "./childComps/cartList"

  import {mapGetters} from "vuex"

  export default {
    name: 'shopcart',
    components: {
      navbar,
      cartList
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(["cartLength", "cartList"])
    },
    methods: {}
  }
</script>
<style scoped>
  .cart{
    height: 100vh;
  }

  .cart-navbar{
    color: #ffffff;
    background-color: var(--coclr-tint);
  }
</style>
