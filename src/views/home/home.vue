<template>
  <div id="home">
    <navbar class="home-navbar">
      <div slot="center">购物街</div>
    </navbar>
    <tabController ref="tabController2" class="tab-controller" :titles="['流行', '新款', '精选']" @tabClick = "tabClick" v-show="isShowTabController"/>
    <scroll class="content" ref="backTop" :probeType="3" @scroll="scroll" :pullUpLoad="true" @pullingUp="pullingUp">
      <homeSwiper :banners="banners" @homeSwiperImageLoad="homeSwiperImageLoad"/>
      <recommendViews :recommends="recommends"/>
      <feature/>
      <tabController ref="tabController" :titles="['流行', '新款', '精选']" @tabClick = "tabClick"/>
      <goodsList :goods="goods[currentType].list"/>
    </scroll>

    <BackTop @click.native="retBackTop" v-show="isShowBackTop"/>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import homeSwiper from "./childComps/homeSwiper";
  import recommendViews from "./childComps/recommendViews";
  import feature from "./childComps/feature"

  import navbar from "components/common/navbar/navbar";
  import scroll from "components/common/scroll/scroll";
  import tabController from "components/content/tabController/tabController";
  import goodsList from "components/content/goods/goodsList";
  import BackTop from "components/content/backtop/BackTop"

  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: 'home',
    components: {
      navbar,
      tabController,
      goodsList,
      scroll,
      BackTop,
      homeSwiper,
      recommendViews,
      feature
    },
    data(){
      return {
        banners: null,
        recommends: null,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabControllerOffsetTop: 0,
        isShowTabController: false,
        saveScrollY: 0
      }
    },
    created() {
      this.getHomeMultidata();
    },
    methods: {
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabController.currentIndex = index;
        this.$refs.tabController2.currentIndex = index;
      },
      retBackTop(){
        console.log(this.$refs)
        this.$refs.backTop.scrollTo(0, 0)
      },
      scroll(position){
        this.isShowBackTop = -position.y > 1000;

        this.isShowTabController = -position.y > this.tabControllerOffsetTop
      },
      pullingUp(){
        this.getHomeGoods(this.currentType);
      },

      getHomeMultidata(){
        getHomeMultidata().then(result => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
          this.$refs.backTop.finishPullUp();
        })
      },
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
      homeSwiperImageLoad(){
        this.tabControllerOffsetTop = this.$refs.tabController.$el.offsetTop;
      }
    },
    mounted(){
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");

      const refresh = this.debounce(this.$refs.backTop.refresh, 100);
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      });
    },
    activated(){
      this.$refs.backTop.scrollTo(0, this.saveScrollY, 0)
      this.$refs.backTop.refresh();
    },
    deactivated(){
      this.saveScrollY = this.$refs.backTop.scroll.y;
    }
  }
</script>
<style lang="postcss" scoped>
  #home{
    background-color: white;
    /*padding-top: 44px;*/
    height: 100vh;

    position: relative;
  }

  .home-navbar{
    background-color: var(--coclr-tint);
    color: #ffffff;

    /*position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 2;*/
  }

  .tab-controller{
    position: relative;
    z-index: 9;
    left: 0;
    right: 0;
  }

  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;*/
  }
</style>
