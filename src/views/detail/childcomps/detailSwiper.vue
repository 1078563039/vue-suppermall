<template>
  <div>
    <swiper class="detail-swiper">
      <swiperItem v-for="item in detailTopImages">
        <img :src="item" alt="">
      </swiperItem>
    </swiper>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {Swiper, SwiperItem} from "components/common/swiper/index";

  export default {
    name: 'detailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      detailTopImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style lang="postcss" scoped>
  .detail-swiper{
    height: 300px;
  }
</style>
