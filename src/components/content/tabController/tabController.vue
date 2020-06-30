<template>
  <div class="tab-controller">
    <div v-for="(item, index) in titles" class="tab-controller-item" :class="{active: index === currentIndex}" @click="tabItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'tabController',
    props: {
      titles: {
        type: Array,
        default(){
          return[];
        }
      }
    },
    components: {},
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabItemClick(index){
        this.currentIndex = index;
        this.$emit("tabClick", index);
      }
    }
  }
</script>
<style>
  .tab-controller{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
  }

  .tab-controller-item{
    flex: 1;
  }

  .active{
    color: var(--color-height-text);
  }

  .active span{
    padding: 5px;
    border-bottom:3px var(--coclr-tint) solid;
  }
</style>
