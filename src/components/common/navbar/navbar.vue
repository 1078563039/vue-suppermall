<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'navbar',
    components: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .navbar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

    /*outline: red 1px solid;*/
  }

  .right, .left{
    width: 60px;

    /*outline: red 1px solid;*/
  }

  .center{
    flex: 1;

    /*outline: red 1px solid;*/
  }
</style>
