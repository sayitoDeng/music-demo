<!--  -->
<template>
  <div class="main">
      <searchnav></searchnav>
      <slider></slider>
      <today></today>
      <myfooter></myfooter>
  </div>
</template>

<script>
import searchnav from '../components/search-nav'
import myfooter from '../components/footer'
import slider from '../components/Swiper'
import today from '../page/TodayPush'
export default {
  data () {
    return {
    };
  },
  components:{
    searchnav,
    myfooter,
    slider,
    today
  }
}

</script>
<style scoped>
 
</style>