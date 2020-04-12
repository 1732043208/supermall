<template>
  <div class="cart">
    <!--    导航-->
    <cart-nav-bar/>

    <!--    商品列表-->
    <cart-list/>

    <!--  底部汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";
  import CartNavBar from "./childComps/CartNavBar";
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    data(){
      return{
        shop: {},
      }
    },
    components: {
      CartNavBar,
      CartList,
      CartBottomBar,
    },

    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  /*.nav-bar {*/
  /*  background-color: #F2F2F2;*/
  /*  color: black;*/
  /*  font-size: 20px;*/
  /*  font-weight: bold;*/
  /*  padding-left: 10px;*/
  /*}*/
  .cart{
    background-color: #F2F2F2;
  }
</style>
