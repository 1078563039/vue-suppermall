<template>
  <div id="detail">
    <detailNavbar class="detail-navbar" @detailNavbarItemClick="detailNavbarItemClick"/>
    <scroll class="detail-scroll" ref="detailScroll">
      <detailSwiper :detailTopImages="detailTopImages"/>
      <detailBaseInfo :goods="goods"/>
      <detailShopInfo :shop="shop"/>
      <detailGoodsInfo :detailInfo="detailInfo" @detailImageGoodsLoad="detailImageGoodsLoad"/>
      <detailParamInfo ref="param" :paramInfo="paramInfo"/>
      <detailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <detailRecommendInfo ref="recommend" :recommendList="recommendList"/>
    </scroll>
    <detailBottomBar @addToCart="addToCart"/>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import detailNavbar from "./childcomps/detailNavbar"
  import detailSwiper from "./childcomps/detailSwiper"
  import DetailBaseInfo from "./childcomps/DetailBaseInfo"
  import DetailShopInfo from "./childcomps/DetailShopInfo"
  import DetailGoodsInfo from "./childcomps/DetailGoodsInfo"
  import DetailParamInfo from "./childcomps/DetailParamInfo"
  import DetailCommentInfo from "./childcomps/DetailCommentInfo"
  import DetailRecommendInfo from "./childcomps/DetailRecommendInfo"
  import DetailBottomBar from "./childcomps/DetailBottomBar"
  import scroll from "components/common/scroll/scroll"

  import {getDetailData, Goods, Shop, GoodsParam} from "network/detail"

  export default {
    name: 'detail',
    components: {
      detailNavbar,
      detailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendInfo,
      DetailBottomBar,
      scroll
    },
    data() {
      return {
        iid: null,
        detailTopImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        themeTops: [],
        // currentIndex: 0
      }
    },
    methods: {
      /*防抖动*/
      debounce(func, delay){
        let timer = null;
        return function (...args) {
          if (timer)
            clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args);
          }, delay)
        }
      },
      _getOffsetTops() {
        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        // this.themeTops.push(Number.MAX_VALUE)
      },
      addToCart() {
        // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.detailTopImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.nowPrice;
        // 3.添加到Store中
        this.$store.commit('addCart', obj)
      },
      getDetailData(){
        getDetailData(this.iid).then(result => {
          // console.log(result)
          const data = result.result;

          this.detailTopImages = data.itemInfo.topImages;

          // 2.3.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

          // 2.4.获取店铺信息
          this.shop = new Shop(data.shopInfo);

          // 2.5.获取商品信息
          this.detailInfo = data.detailInfo

          // 2.6.保存参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

          // 2.7.保存评论信息
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }

          // this.recommendList = data.shopInfo.categories
        })
      },
      detailImageGoodsLoad(){
        this.$refs.detailScroll.refresh();
        // this.$refs.detailScroll.scrollTo(0,0)
        // console.log("======")

        const detailDebounce = this.debounce(this._getOffsetTops, 100)
        detailDebounce()
      },
      detailNavbarItemClick(index){
        // console.log(index)
        this.$refs.detailScroll.scrollTo(0, -this.themeTops[index], 100)
      }
    },
    created(){
      this.iid = this.$route.query.iid;

      this.getDetailData()
    },
  }
</script>
<style lang="postcss" scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-navbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-scroll{
    height: calc(100% - 44px - 49px);
  }
</style>
