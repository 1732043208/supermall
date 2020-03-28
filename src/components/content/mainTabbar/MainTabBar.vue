<template>
  <tab-bar>
    <tab-bar-item lujing="/home" activeColor="#13227a">
      <img slot="item-icon" src="~assets/img/TabBar/home-inavtive.png">
      <img slot="item-icon-active" src="~assets/img/TabBar/home-active.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item lujing="/category" activeColor="#13227a">
      <img slot="item-icon" src="~assets/img/TabBar/fenlei-inactive.png">
      <img slot="item-icon-active" src="~assets/img/TabBar/fenlei-active.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item lujing="/cart" activeColor="#13227a">
      <img slot="item-icon" src="~assets/img/TabBar/shopping-inactive.png">
      <img slot="item-icon-active" src="~assets/img/TabBar/shopping-active.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item lujing="/profile" activeColor="#13227a">
      <img slot="item-icon" src="~assets/img/TabBar/mine-inactive.png">
      <img slot="item-icon-active" src="~assets/img/TabBar/mine-active.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
