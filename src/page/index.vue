<!--  -->
<template>
  <div class="main">
      <searchnav></searchnav>
      <slider></slider>
      <myfooter></myfooter>
  </div>
</template>

<script>
import searchnav from '../components/search-nav'
import myfooter from '../components/footer'
import slider from '../components/Swiper'
export default {
  data () {
    return {
    };
  },
  components:{
    searchnav,
    myfooter,
    slider
  }
}

</script>
<style scoped>
</style>