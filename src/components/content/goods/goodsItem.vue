<template>
  <div class="goods" @click="goodsItemClick">
    <img v-lazy="simpleItem.show.img" @load="imageLoad">
    <div class="goods-info">
      <p>{{simpleItem.title}}</p>
      <span class="price">{{simpleItem.price}}</span>
      <span class="collect">{{simpleItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    name: 'goodsItem',
    props: {
      simpleItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {},
    data() {
      return {}
    },
    methods: {
      imageLoad(){
        this.$bus.$emit("itemImageLoad");
      },
      goodsItemClick(){
        this.$router.push({
          path: "/detail",
          query: {
            iid: this.simpleItem.iid
          }
        });
      }
    }
  }
</script>
<style>
  .goods {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods img {
    width: 100%;
    border-radius: 5%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
