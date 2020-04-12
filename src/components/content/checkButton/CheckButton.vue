<template>
  <div :class="isChecked == false ? check : uncheck">
    <img src="~assets/img/cart/tick.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        check:'check',
        uncheck:'uncheck',
      }
    },
  }
</script>

<style scoped>
  .check img , .uncheck img {
    width: 10px;
    height: 10px;
  }
  .check{
    border: 1px solid #aaa;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0;

  }
  .uncheck{
    background-color: red;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-image: linear-gradient(to right,#FF7E00, #FF5501);
    text-align: center;
    line-height: 28px;

  }
</style>
