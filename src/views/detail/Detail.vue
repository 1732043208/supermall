<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommend-name ref="recommend"/>
      <goods-list :goods="recommends"/>


    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailRecommendName from "./childComps/DetailRecommendName";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import BackTop from "../../components/content/backTop/BackTop";

  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";
  import {debounce} from "common/utils";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailRecommendName,
      DetailBottomBar,
      Scroll,
      GoodsList,
      BackTop
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        isShowBackTop: false,
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result;
        //1.获取顶部的图片轮播数据
        // console.log(res);
        const {columns, itemInfo, shopInfo} = res.result;
        this.topImages = itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(itemInfo, columns, shopInfo.services)

        //3.创建店铺信息的对象
        this.shop = new Shop(shopInfo)

        //4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        //5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //6.取出评论的信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
        //4.给getThemeTopY赋值(对给this,themeTopYs赋值的操作进行防抖)，避免过于频繁的调用
        this.getThemeTopY = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
          // this.themeTopYs.push(Number.MAX_VALUE);

          console.log(this.themeTopYs);
        }, 100)

      })

      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },

    mounted() {
      //3.图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('detailItemImageLoad', () => {
        refresh()
      })

    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()

        this.getThemeTopY();
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 500)
      },
      contentScroll(position) {
        //1.获取y值
        const positionY = -position.y
        //2.positionY和主题中值进行对比[]
        // [0, 7938, 9120, 9452]
        // positionY 在 0 和 7938之间,index = 0
        // positionY 在 7938 和 9120 之间, index = 1
        // positionY 在 9120 和 9452 之间, index = 2
        // positionY 在 超过 9452 值, index = 3
        let length = this.themeTopYs.length

        for (let i = 0; i < length; i++) {
          // if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          //   this.currentIndex = i;
          //   this.$refs.nav.currentIndex = this.currentIndex
          // }

          if (this.currentIndex !== i && ((i < length - 1 && positionY >= this
            .themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY
            >= this.themeTopYs[i]))) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }


        //3.是否显示回到顶部

        this.isShowBackTop = -position.y > 1000

      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      addToCart() {
        //1.获取购物车需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        //2.将商品添加到购物车里面
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product)

      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    /*这里使用z-index：111是因为之前tabcontr的z-index设置了110*/
    z-index: 111;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }

  .detail-nav {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }

</style>
