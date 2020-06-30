<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'BackTop',
    components: {},
    data() {
      return {}
    },
    methods: {

    }
  }
</script>
<style lang="postcss" scoped>
  .back-top{
    position: fixed;

    right: 8px;
    bottom: 55px;
  }

  .back-top img{
    width: 43px;
    height: 43px;
  }
</style>
