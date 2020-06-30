<template>
  <div class="swiper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import BScroll from 'better-scroll';

  export default {
    name: 'scroll',
    components: {},
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default() {
          return 0;
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    methods: {
      scrollTo(x, y, time = 300){
        this.scroll.scrollTo(x, y, time);
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      },
      refresh(){
        this.scroll.refresh();
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on("scroll", position => {
        this.$emit("scroll", position)
      })

      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp")
      })
    }
  }
</script>
<style lang="postcss" scoped>

</style>
