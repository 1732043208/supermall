<template>
  <div class="Profile-info">
    <scroll class="content" ref="scroll">
      <profile-nav-bar/>
      <profile-info-first/>
      <profile-info-second/>
      <profile-info-third/>
      <div style="height: 580px;padding-left: 20px;padding-top: 10px">Joker 制作 (2020-4-14)</div>
    </scroll>
  </div>
</template>

<script>
  import ProfileNavBar from "./childProfile/ProfileNavBar";
  import ProfileInfoFirst from "./childProfile/ProfileInfoFirst";
  import ProfileInfoSecond from "./childProfile/ProfileInfoSecond";
  import ProfileInfoThird from "./childProfile/ProfileInfoThird";

  import Scroll from "../../components/common/scroll/Scroll";
  export default {
    name: "Profile",
    components: {
      ProfileInfoThird,
      ProfileNavBar,
      ProfileInfoFirst,
      ProfileInfoSecond,
      Scroll
    },
  }
</script>

<style scoped>

  .Profile-info {
    background-color: #F8F8F8;
    height: calc(100vh - 49px);

  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
