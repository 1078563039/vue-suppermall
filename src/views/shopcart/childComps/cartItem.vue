<template>
  <div>
    <p>
      {{cartListItem}}
    </p>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'cartItem',
    components: {},
    data() {
      return {}
    },
    props: {
      cartListItem: {
        type: Object,
        default (){
          return {};
        }
      }
    },
    methods: {}
  }
</script>
<style lang="postcss" scoped>

</style>
