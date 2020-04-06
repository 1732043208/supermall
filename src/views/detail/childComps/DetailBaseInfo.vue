<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <!--    标题-->
    <div class="info-title">{{goods.title}}</div>
    <!--价格-->
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <!--其他-->
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <!--    物流-->
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    padding: 10px;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    font-size: 18px;
  }

  .info-price {
    margin-top: 10px;
  }

  .new-price {
    color: var(--color-hight-text);
    font-size: 24px;
  }

  .old-price {
    font-size: 13px;
    text-decoration: line-through;
  }

  .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-hight-text);
    border-radius: 8px;
    margin-left: 5px;
    /*让元素上浮一些:使用相对定位即可*/
    position: relative;
    top: -8px;
  }

 .info-other{
   margin-top: 15px;
   line-height: 30px;
   display: flex;
   font-size: 13px;
   border-bottom: 1px solid rgba(100,100,100,0.1);
   justify-content: space-between;
 }

  .info-service{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
  }

  .info-service-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span{
    font-size: 13px;
    color: #333;
  }
</style>
