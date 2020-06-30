<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>

    <tabbar>
      <tabbarItem path="/home">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="tabbar-item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="tabbar-item-text">首页</div>
      </tabbarItem>
      <tabbarItem path="/category">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="tabbar-item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="tabbar-item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="/shopcart">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/cart.svg">
        <img slot="tabbar-item-icon-active" src="~assets/img/tabbar/cart_active.svg">
        <div slot="tabbar-item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="/profile">
        <img slot="tabbar-item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="tabbar-item-icon-active" src="~/assets/img/tabbar/profile_active.svg">
        <div slot="tabbar-item-text">我的</div>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from "components/common/tabbar/tabbar"
  import tabbarItem from "components/common/tabbar/tabbarItem"

  export default {
    name: "app",
    components: {
      tabbar,
      tabbarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
