<template>
  <div id="app">
    <div class="Music-head">
      <router-link tag="a" to="/hot">
        <div class="Music-head-img">
          <div class="head-img"></div>  
        </div>      
      </router-link>
    </div>

    <index></index>
    <!-- <keep-alive :include="['songSheet','songlists','singer']">
      <router-view
        @get_music="getMusic"
        @setCurrentTime="getCurrentTime" 
        v-if="isRouterAlive">
      </router-view>
    </keep-alive> -->
  </div>
</template>

<script>
import index from './page/index'
export default {
  name: 'App',
  data(){
    return{
      isRouterAlive:true,
    }
  },
  components:{
    index
  }
}
</script>

<style>
.collection-block{
  background-color: #F5F5F5;
  padding-bottom: 1rem;
}
.block-padding{
  padding: 10px 17px;
  background-color: #fff;
}
.block-padding .title{
  display: flex;
  margin: 14px 0 18px;
}
.block-padding .title h3{
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0%;
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 2rem;
}
.block-padding .title .btn-more{
  font-size: 1.2rem;
  text-align: right;
  margin-top: .5rem;
  color: #333;
}
/*共同头*/
.Music-head-img{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  background-color:#333;
  -webkit-background-size: cover;
  background-size: cover;
  z-index: 100;
}
.Music-head{
  padding: 27px 17px;
  background-color: #ccc;
}
.head-img{
  margin:0 auto;
  width:180px;
  height:54px;
  background: url(./assets/banner/topbar.png) center no-repeat;
  background-position:0 -6px;
}
/*推荐切换*/
.singer_nav{
  width: 100%;
  height: 80px;
  background-color: #fff;
}
.singer_nav ul{
  width: 100%;
  height: 67%;
  display: flex;
  justify-content:space-around;
}
.singer_nav ul li{
  width: 12rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  border-bottom: 1px solid #eee;
  box-sizing:border-box;
}
.singer_nav ul  .th-tabbar-item{
  font-size: 16px;
  color: #999;
}
.singer_nav ul .selected{
  border-bottom: 1px solid #E03229;
  color: #E03229;
}
/*默认图标*/
i{
  font-size: 25px;
}
.Music-head-nav{
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  z-index: 998;
  width: 100%;
  height: 44px;
  background-color: #F3F3F3;
  box-shadow: 0px 1px 5px -2px #3C3F41;
}
.Music-head-nav .nav-left{
  float: left;
  margin-left: 4%;
}
.merge-logo{
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  background: url(//static1.qianqian.com/web/st/images/logo-taihe.1f4c6b966896d6dc.png) no-repeat 0 0;
  background-size: cover;
  margin-top: .7rem;
}
.Music-head-nav .nav-right {
  width: 76%;
  height: 100%;
  display:flex;
  float: right;
  justify-content:space-around;
}
.nav-right  .nva-item-content{
  display: inline-block;
  font-size: 1.6rem;
  color: #999;
  padding-top: 12px;
  text-align: right;
}

.back-top{
  position: fixed;
  right: 1.5rem;
  bottom: 120px;
  height: 39px;
  width: 39px;
  z-index: 999;
  opacity: .8;
  text-align: right;
  display: none;
}
.back-top span{
  display: inline-block;
  background: url(//static1.qianqian.com/web/st/images/icon-back2top2.af69f845890e1a53.png) no-repeat 0 0;
  background-size: 39px 39px;
  width: 39px;
  height: 39px;
}


.li-tip{
  text-align: center
}
.li-tip .tip-text{
  font-size: 14.5px;color: #999;
}
</style>

