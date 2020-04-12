<template>
    <div>
      <div class="store-recommended">
        <div class="start"></div>
        <div class="desc">看了又看</div>
        <div class="end"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailRecommendName"
    }
</script>

<style scoped>

  .store-recommended {
    margin: 10px 0 10px 0;
    color: var(--color-hight-text);
    text-align: center;
    line-height: 30px;
  }

  .store-recommended .desc{
    height: 30px;
  }
  .store-recommended {
    padding: 0 140px;
  }
  /*线段的长度*/
  .store-recommended .start, .store-recommended .end {
    width: 130px;
    height: 1px;
    background-color: var(--color-hight-text);
    position: absolute;
  }
  /*控制圆点的大小*/
  .store-recommended .start::before, .store-recommended .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: var(--color-hight-text);
    bottom: 0;
  }
  /*左边圆点的位置*/
  .store-recommended .start::before {
    left: 0px;
  }
  /*右边圆点的位置*/
  .store-recommended .end::after {
    right: 0px;
  }
  /*左边线段的位置*/
  .store-recommended .start{
    left: 120px;

  }
  /*右边线段的位置*/
  .store-recommended .end{
    right: 120px;
  }
</style>
