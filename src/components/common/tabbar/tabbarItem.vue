<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tabbar-item-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'tabbarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    components: {},
    data() {
      return {
        //isActive: true
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>
<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;   /*图片最下面间距会保留3px*/
  }

  /*.active{
    color: red;
  }*/
</style>
