<template>
  <div class="toast" v-show="isShow">
    <div>
      <img src="~assets/img/cart/cart-tick.png" alt="">
      <div class="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false,

      }
    },
    methods: {
      show(message="默认文字", duration=2000) {

        this.isShow = true;
        this.message = message

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, duration)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  width: 170px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 8px 10px;
  font-size: 14px;
  text-align: center;
  z-index: 999;
  color: #fff;
  background-color: rgba(0,0,0,0.75);
  border-radius: 12px;
}
  .toast img{
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translate(-50%);
    width: 30px;
    height: 30px;
  }
  .message{
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
  }
</style>
