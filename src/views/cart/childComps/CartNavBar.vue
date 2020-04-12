<template>
  <div class="navbar">
    <div class="left">购物车<span class="hahahaha">管理</span><br/>
      <span class="leftspan">共{{cartLength}}件宝贝 收货地址: 广州市天河区...</span>
    </div>
    <div class="content"></div>
    <div class="right"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "CartNavBar",
    computed: {
      ...mapGetters(['cartLength'])
    }

  }
</script>

<style scoped>
  .nav-bar {
    width: 100vh;
    display: flex;

  }

  .left {
    width: 240px;
    left: 0;
    font-size: 22px;
    font-weight: bold;
    margin-left: 8px;
    padding-top: 4px;
  }

  .content {
    flex: 1;
  }

  .right {
    width: 50px;
    background-color: red;

    right: 0;
  }
  .leftspan{
    font-weight: normal;
    font-size: 14px;
  }
  .hahahaha{
    position: absolute;
    right: 6px;
    top:6px;
    font-size: 16px;
    font-weight: normal

  }
</style>
