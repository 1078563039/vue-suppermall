<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'recommendViews',
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;

    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend-item{
    flex: 1;
  }

  .recommend img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
