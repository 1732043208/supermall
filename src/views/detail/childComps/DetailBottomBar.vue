<template>
    <div class="bottom-bar">
      <div class="bar-item bar-left">
        <div>
          <i class="icon service"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods:{
          addToCart(){
           this.$emit('addCart')
          }
      }
    }
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  background: #fff;
  display: flex;
  text-align: center;
  border-top:1px solid #DEDEDE;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item>div {
  flex: 1;
}
.bar-left{
  flex: 2;
  line-height: 10px;
}
.bar-left .text {
  font-size: 12px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position:0 -54px;
}
.bar-left .shop {
  background-position:0 -98px;
}
.bar-right {
  flex: 3;
  font-size: 15px;
  color: #fff;
  line-height: 36px;
  margin: auto;
}
.bar-right .cart {
  background-image: linear-gradient(to right,#FA0000, #FE4E10);
  color: #fff;
  border-radius: 18px;
  margin: auto;
  height: 34px;
}
.bar-right .buy {
  background-image: linear-gradient(to right,#FFA600, #FFBB00);
  border-radius: 18px;
  height: 34px;
  margin-left: 8px;
}
</style>
