<template>
  <div>
    <navbar>
      <div slot="left" @click="backPage" class="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detailNavbar">
        <div v-for="(item, index) in title" class="detailNavbarItem" :class="{active: index == currentIndex}" @click="detailNavbarItemClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import navbar from "components/common/navbar/navbar";

  export default {
    name: 'detailNavbar',
    components: {
      navbar
    },
    data() {
      return {
        title: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    methods: {
      detailNavbarItemClick(index){
        this.currentIndex = index;
        this.$emit("detailNavbarItemClick", this.currentIndex)
      },
      backPage(){
        this.$router.back();
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .detailNavbar{
    display: flex;
    font-size: 13px;
  }

  .detailNavbarItem{
    flex: 1;
  }

  .active{
    color: var(--color-height-text);
  }

  .back img{
    margin-top: 14px;
    width: 17px;
    height: 17px;
  }
</style>
