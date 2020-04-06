<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <DetailShopInfo :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import {getDetail, Goods, Shop} from "network/detail";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        //1.获取顶部的图片轮播数据
        console.log(res);
        const {columns, itemInfo, shopInfo} = res.result;
        this.topImages = itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(itemInfo, columns, shopInfo.services)

        //3.创建店铺信息的对象
        this.shop = new Shop(shopInfo)
      })
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
  .content{
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
</style>
