<template>
  <div class="wrapper" ref="aaaa">
    <scroll>  分类页(待完善)</scroll>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Category",
    components: {Scroll},
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{

      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    overflow: hidden;
    font-size: 26px;
    font-weight: bold;
    /*overflow-y: scroll;*/
  }
</style>
