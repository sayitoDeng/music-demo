<!-- 轮播图 -->
<template>
  <div class="silder">
      <swiper :options="swiperOption" >
          <swiper-slide>
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1215722.jpg?max_age=2592000">
          </swiper-slide>
          <swiper-slide >
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1215003.jpg?max_age=2592000">
          </swiper-slide>
          <swiper-slide>
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1217342.jpg?max_age=2592000">
          </swiper-slide>
          <swiper-slide>
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1217460.jpg?max_age=2592000">
          </swiper-slide>
          <swiper-slide>
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1214396.jpg?max_age=2592000">
          </swiper-slide>
          <swiper-slide>
            <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1217286.jpg?max_age=2592000">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
        swiperOption:{
            pagination:{
                el:'.swiper-pagination'
            },
            loop:true,
            autoplay:{
                delay:1200,
                disableOnInteraction:false
            }
        }
    };
  },
}

</script>
<style scoped>
img{
    height:160px;
    width:100%;
}
.silder{
    width:100%;
    margin-top: 44px;
}
.silder .swiper-slide{
    height:160px;
}
.slider .swiper-slide .swiper-pagination-bullet-active{
    background-color: #ff0065
}
</style>