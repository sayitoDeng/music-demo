<!--  -->
<template>
  <div class="main">
      <searchnav></searchnav>
      <!-- 轮播 -->
      <slider></slider>
      <!-- 推荐 -->
      <today></today>
      <!-- 随心听 -->
      <div class="random">
        <img width="95%" src="//static1.qianqian.com/web/st/images/banner-ting.6c54584ee46aec38.jpg" @click="randomMusic">
      </div>
      <!-- 音乐列表 -->
      <musicNav @get_music="getMusic"></musicNav>
      <myfooter></myfooter>
  </div>
</template>

<script>
import searchnav from '../components/search-nav'
import myfooter from '../components/footer'
import slider from '../components/Swiper'
import today from '../page/TodayPush'
import musicNav from '../page/MusicNav'
export default {
  name:'index',
  inject:['getMusics'],
  data () {
    return {
    };
  },
  methods:{
    getMusic(obj){
      this.$emit('get_music',obj)
    },
    randomMusic(){
      this.getMusics()
    }
  },
  components:{
    searchnav,
    myfooter,
    slider,
    today,
    musicNav
  }
}

</script>
<style scoped>
 .random{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
  }
</style>