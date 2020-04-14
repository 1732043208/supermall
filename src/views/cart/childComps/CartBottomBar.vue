<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      <span style="color: #979797;font-size: 10px">不含运费</span>
      <span style="font-size: 18px"> 合计:</span>
      <span style="color: #E5521D">{{totalPrice}}</span></div>
    <div class="calculate">结算({{totalLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    components: {CheckButton},
    computed: {
      ...mapGetters(['cartLength']),
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      totalLength() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
      },
      // isSelectAll: function () {
      //   return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
      // }
      isSelectAll(){
        if (this.$store.getters.cartList.length === 0) return false
        // 第一种方法
        // return !(this.$store.getters.cartList.filter(item => !item.checked).length)

        //第二种方法
        // return !this.$store.getters.cartList.find(item => !item.checked)

        // 第三种方法
        for (let item of this.$store.getters.cartList){
          if (!item.checked){
            return false
          }
        }
        return true
      }
    },
    methods:{
      checkClick(){
        if (this.isSelectAll){
          this.$store.getters.cartList.forEach(item => item.checked= false)
        }else {
          this.$store.getters.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    background-color: #fff;
    display: flex;
    line-height: 40px;
    height: 50px;
    font-size: 14px;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 30px;
    flex: 1;
    position: absolute;
    top: 8px;
    right: 100px;
    line-height: 32px;
  }

  .calculate {
    width: 80px;
    position: absolute;
    top: 8px;
    right: 0;
    text-align: center;
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #FE8000, #FF5D0D);
    height: 34px;
    color: #fff;
    line-height: 32px;
    font-size: 15px;
    margin-right: 6px;
  }
</style>
