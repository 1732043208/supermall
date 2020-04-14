<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item,index) in cartList"
        :key="index"
        :product="item"/>
      <div v-show="cartList.length == 0" class="cartnull">
        <img src="~assets/img/cart/Null.jpg">
        <span class="NullSpanFirst">购物车竟然是空的</span><br/>
        <span class="NullSpanSecond">再忙，也要记得买点东西犒劳自己~</span><br/>
        <button class="NullButton" @click="NullClick">去逛逛</button>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList']),
    },
    created() {
      console.log(this.cartList);
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods:{
      NullClick(){
        this.$router.push('/Home')
      }
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100vh - 44px - 49px - 50px - 7px);
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
  .cartnull{
    margin-top: 100px;
    text-align: center;
    line-height: 30px;
  }
  .cartnull img{
    display: block;
    width: 140px;
    height: 140px;
    margin: auto;
  }
  .NullSpanFirst{
    font-size: 20px;
  }
  .NullSpanSecond{
    font-size: 14px;
    color: #949494;
  }
  .NullButton{
    border: 1px solid #D5D5D5;
    background-color:#F2F2F2;
  }
</style>
