<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>

  export default {
    name: "BackTop",

  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 60px;
    background-color: #fff;
    border-radius: 43px;
    width: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 5px 5px 5px grey;
  }

  .back-top img {
    width: 30px;
    height: 30px;
    margin-top: 8px;
  }

</style>
