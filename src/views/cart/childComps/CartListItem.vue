<template>
  <div class="all">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{shop.name}}旗舰店<span style="color: grey;margin-left: 6px">></span></span>
    </div>
    <div id="cart-list-item">
      <div class="item-selector">
        <check-button :is-checked="product.checked" @click.native="checkClick"/>
      </div>
      <div class="item-img">
        <img :src="product.image" alt="商品图片">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{product.price}}</div>
          <div class="item-count right" style="display: flex;position: absolute;right: 8px">
            <button @click="decrement" :disabled="product.count <=1" class="buttonstyle">-</button>
            <div class="count">{{product.count}}</div>
            <button @click="increment" class="buttonstyle">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {Shop, getDetail} from "network/detail";

  export default {
    name: "CartListItem",
    components: {
      CheckButton
    },
    data() {
      return {
        shop: {},
      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const {shopInfo} = res.result;

        //3.创建店铺信息的对象
        this.shop = new Shop(shopInfo)

      })
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked
      },
      decrement() {
        this.product.count--
      },
      increment() {
        this.product.count++
      }
    }
  }
</script>

<style scoped>
  .shop-top {
    display: flex;
    height: 40px;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    margin: 16px 6px 0 6px;
    padding: 6px 0 0 30px;
    line-height: 38px;
    border-bottom: 1px solid #EAEAEA;
  }

  .shop-top img {
    position: relative;
    top: 4px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }

  .title {
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
  }

  #cart-list-item {
    display: flex;
    font-size: 0;
    padding: 0 5px 0 5px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    border-radius: 0 0 12px 12px;
    margin: 0 6px 0 6px;
  }

  .item-selector {
    width: 18px;
    display: flex;
    position: relative;
    top: 40px;

  }

  .item-title {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 84px;
    height: 104px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 4px 4px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    width: 220px;
    height: 46px;
    background-color: #F5F5F5;
    line-height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px;
  }

  .info-bottom {
    margin-top: 10px;
    display: flex;
    margin-bottom:10px ;

  }

  .info-bottom .item-price {
    color: orangered;
  }
  .item-price{
    font-weight: bold;
  }
.buttonstyle{
  width: 30px;
  border-radius: 2px;
  border: 1px solid #EAEAEA;
  background-color:#fff;
}
  .count{
    width: 40px;
    border: 1px solid #EAEAEA;
    text-align: center;

  }
</style>
