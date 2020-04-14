<template>
  <div class="info-second">
    <div class="niubi">
      <div class="first">
        <span class="firstleft">我的订单</span>
        <span class="firstright">查看全部订单 ></span>
      </div>
      <div class="second">
        <div class="second-info-first">
          <img src="~assets/img/profile/daifukuan.png">
          <span class="title-first">代付款</span>
        </div>
        <div class="second-info-second">
          <img src="~assets/img/profile/daifahuo.png">
          <span class="title-second">代发货</span>
        </div>
        <div class="second-info-third">
          <img src="~assets/img/profile/daishouhuo.png">
          <span class="title-third">待收货</span>
        </div>
        <div class="second-info-fourth">
          <img src="~assets/img/profile/pingjia.png">
          <span class="title-fourth">评价</span>
        </div>
        <div class="second-info-fifth">
          <img src="~assets/img/profile/tuikuan.png">
          <span class="title-fifth">退款</span>
        </div>
      </div>
      <div class="third">
        <div>
          <span class="thirdspanone">最新物流</span>
          <span class="thirdspantwo">04-13</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfoSecond"
  }
</script>

<style scoped>
  .info-second {
    position: absolute;
    top: 280px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .niubi {
    width: 340px;
    height: 220px;
    background-color: #fff;
    border-radius: 20px;
  }

  .firstleft {
    position: absolute;
    left: 14px;
    top: 14px;
    float: left;
    font-weight: bold;
  }

  .firstright {
    float: right;
    position: absolute;
    right: 14px;
    top: 14px;
    color: #999999;
    font-size: 14px;
  }

  .second {
    display: flex;
    position: absolute;
    top: 50px;
    border-top: 1px solid #EEEEEE;
    width: 100%;
    font-size: 12px;
  }

  .second img {
    width: 34px;
  }

  .second-info-first {
    flex: 1;
    position: absolute;
    top: 16px;
    left: 16px;
  }

  .second-info-second {
    flex: 1;
    position: absolute;
    top: 20px;
    left: 80px;
  }

  .second-info-third {
    flex: 1;
    position: absolute;
    top: 17px;
    left: 150px;

  }

  .second-info-fourth {
    flex: 1;
    position: absolute;
    top: 17px;
    left: 220px;
  }

  .second-info-fifth {
    flex: 1;
    position: absolute;
    top: 17px;
    left: 286px;
  }

  .title-first {
    position: absolute;
    top: 40px;
    display: flex;
    width: 60px;
  }

  .title-second {
    position: absolute;
    top: 36px;
    display: flex;
    width: 60px;
  }

  .title-third {
    position: absolute;
    top: 40px;
    display: flex;
    width: 60px;
  }

  .title-fourth {
    position: absolute;
    top: 40px;
    display: flex;
    width: 60px;
    left: 6px;
  }

  .title-fifth {
    position: absolute;
    top: 40px;
    display: flex;
    width: 60px;
    left: 6px;
  }

  .third {
    width: 310px;
    background-color: #F6F6F6;
    position: absolute;
    height: 80px;
    left: 15px;
    top: 130px;

    font-size: 14px;
    border-radius: 12px;
  }

  .thirdspanone {
    color: #999999;
    padding-left: 6px;
    padding-top: 6px;
    float: left;
  }

  .thirdspantwo {
    color: #999999;
    float: right;
    padding-right: 6px;
    padding-top: 6px;
  }

</style>
