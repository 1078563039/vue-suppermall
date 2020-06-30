<template>
  <swiper>
    <swiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="homeSwiperImageLoad">
      </a>
    </swiperItem>
  </swiper>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {Swiper, SwiperItem} from "components/common/swiper/index";

  export default {
    name: 'homeSwiper',
    props: {
      banners: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isEmitImageLoad: true
      }
    },
    methods: {
      homeSwiperImageLoad(){
        if (this.isEmitImageLoad) {
          this.$emit("homeSwiperImageLoad");
          this.isEmitImageLoad = false;
        }
      }
    }
  }
</script>
<style lang="postcss" scoped>
  body {
    background-color: #ff0000;
  }
</style>
