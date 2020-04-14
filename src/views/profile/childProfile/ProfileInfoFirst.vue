<template>
    <div class="info-first">
      <div class="first">
        <span>0</span><br/>
        <span class="title">收藏夹</span>
      </div>

      <div class="first">
        <span>0</span><br/>
        <span class="title">关注店铺</span>
      </div>

      <div class="first">
        <span>0</span><br/>
        <span class="title">足迹</span>
      </div>

      <div class="first">
      <span>0</span><br/>
      <span class="title">红包卡卷</span>
    </div>

    </div>
</template>

<script>
    export default {
        name: "ProfileInfoFirst"
    }
</script>

<style scoped>

  .info-first{
    display: flex;
    position: absolute;
    top: 120px;
    text-align: center;
    left: 8px;
  }
  .first{
    flex: 1;
    width: 90px;
  }
.title{
  font-size: 14px;
  color: #666666;
}
</style>
