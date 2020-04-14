<template>
  <div class="profile-nav-bar">
    <div class="left">
      <img src="~assets/img/profile/Profileimage.jpg">
      <span class="title">Joker</span>
    </div>
    <div class="right">
      <img src="~assets/img/profile/mine.png">
      <img src="~assets/img/profile/setting.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileNavBar"
  }
</script>

<style scoped>
.profile-nav-bar{
  display: flex;
}
  .left img{
    width: 60px;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    left: 20px;
    top: 38px;
  }
  .title{
    position: absolute;
    left: 100px;
    top: 58px;
    font-size: 18px;
    font-weight: bold;
  }
  .right{
    position: absolute;
    right: 16px;
    top: 10px;
    display: flex;
    width: 60px;
  }
  .right img{
    width: 20px;
    margin-right: 18px;
  }
</style>
