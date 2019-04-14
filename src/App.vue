<template>
  <div id="app">
    <div class="Music-head">
      <router-link tag="a" to="/hot">
        <div class="Music-head-img">
          <div class="head-img"></div>
        </div>
      </router-link>
    </div>

    <!-- <index></index> -->
     <keep-alive :include="['songSheet','songlists','singer']">
       <router-view
        @get_music="getMusic"
        @setCurrentTime="getCurrentTime" 
        v-if="isRouterAlive">
      </router-view>
    </keep-alive>
    <footer_music
      class="abc"
      :music="music"
      :musicList="musicList"
      :isLoad="isLoad"
      :musicShowL="musicShowL"
      :muted="muted"
      :currentTime="currentTime"
      @close_music="closeMusic"
    ></footer_music>
  </div>
</template>

<script>
import footerMusic from "./components/footerMusic";
export default {
  name: "App",
  provide(){
    return {
      reload:this.reload,
      getMusics:this.getMusics,
      getAllMusic:this.getAllMusic
    }
  },
  data() {
    return {
      isRouterAlive: true,
      music:{},
      musicList:[],
      isLoad: false,
      musicShowL: false,
      muted: false,
      currentTime: 0
    };
  },
  components: {
    'footer_music': footerMusic
  },
  methods: {
    getMusic(obj) { 
      this.$nextTick(function() {
        if (obj != null) {
          this.musicShowL = true;
          this.isLoad = true;
          this.music = obj;
          this.muted = false;
          if (obj.currentTime !== undefined) {
            this.currentTime = obj.currentTime;
          } else {
            this.currentTime = 0;
          }
        }
      });
    },
    getCurrentTime(time) {
      this.currentTime = time;
    },
    closeMusic(flay) {
      this.musicShowL = false;
      setTimeout(() => {
        this.isLoad = flay;
      }, 50);
    },
    mapMusic(data) {
      let music = null;
      if (data) {
        music = {
          src: data.bitrate.file_link || data.bitrate.show_link,
          title: data.songinfo.title,
          artist: data.songinfo.author,
          pic: data.songinfo.pic_radio,
          songId: data.songinfo.song_id
        };
      }
      return music;
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    getMusics() {
      let url =
        this.musicapi +
        "/v1/restserver/ting?from=webapp_music&format=json&method=baidu.ting.radio.getChannelSong&channelname=public_tuijian_suibiantingting&version=2.1";
      this.$axios.get(url).then(res => {
        if (res.data.error_code === 22000) {
          let randomSongIds = res.data.result.songlist
            .splice(0, 10)
            .map(item => {
              return item.songid;
            });
          this.getAllMusic(randomSongIds, true);
        }
      });
    },
    getAllMusic(songs, autoPlay = false) {
      if (songs.length > 30) songs.splice(30, songs.length);
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)"
      });

      let promiseArr = songs.map(item => {
        return this.$axios.get(
          this.musicapi +
            "/v1/restserver/ting?format=json&from=webapp_music&method=baidu.ting.song.playAAC&songid=" +
            item
        );
      });

      this.$axios.all(promiseArr).then(
        this.$axios.spread((...args) => {
          let songList = args.map(item => {
            let music = null;
            if (item.data.error_code !== 22469) {
              return (music = this.mapMusic(item.data));
            } else {
              this.$message({
                message: "歌曲版权原因以下架~请其他的吧",
                type: "warning",
                center: true,
                showClose: true
              });
            }
            return music;
          });
          if (songList.length > 0) {
            this.musicList = songList.filter(item => {
              return item;
            });
            if (autoPlay) this.getMusic(this.musicList[0]);
          }
          loading.close();
        })
      );
    }
  },
  watch:{
      $route(to,from){
        if(to.name === 'playMany' || to.name === 'play'){
          this.musicShowL = false
          this.muted = true
        }else {
          if (this.isLoad===true){
            this.musicShowL = true
            this.muted = false
          }
        }
      },
    },
};
</script>

<style>
.collection-block {
  background-color: #f5f5f5;
  padding-bottom: 1rem;
}
.block-padding {
  padding: 10px 17px;
  background-color: #fff;
}
.block-padding .title {
  display: flex;
  margin: 14px 0 18px;
}
.block-padding .title h3 {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0%;
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 2rem;
}
.block-padding .title .btn-more {
  font-size: 1.2rem;
  text-align: right;
  margin-top: 0.5rem;
  color: #333;
}
/*共同头*/
.Music-head-img {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 54px;
  background-color: #333;
  -webkit-background-size: cover;
  background-size: cover;
  z-index: 100;
}
.Music-head {
  padding: 27px 17px;
  background-color: #ccc;
}
.head-img {
  margin: 0 auto;
  width: 180px;
  height: 54px;
 /*  background: url(./assets/banner/topbar.png) center no-repeat; */
  background-position: 0 -6px;
}
/*推荐切换*/
.singer_nav {
  width: 100%;
  height: 80px;
  background-color: #fff;
}
.singer_nav ul {
  width: 100%;
  height: 67%;
  display: flex;
  justify-content: space-around;
}
.singer_nav ul li {
  width: 12rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.singer_nav ul .th-tabbar-item {
  font-size: 16px;
  color: #999;
}
.singer_nav ul .selected {
  border-bottom: 1px solid #e03229;
  color: #e03229;
}
/*默认图标*/
i {
  font-size: 25px;
}
.Music-head-nav {
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  z-index: 998;
  width: 100%;
  height: 44px;
  background-color: #f3f3f3;
  box-shadow: 0px 1px 5px -2px #3c3f41;
}
.Music-head-nav .nav-left {
  float: left;
  margin-left: 4%;
}
.merge-logo {
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  background: url(//static1.qianqian.com/web/st/images/logo-taihe.1f4c6b966896d6dc.png)
    no-repeat 0 0;
  background-size: cover;
  margin-top: 0.7rem;
}
.Music-head-nav .nav-right {
  width: 76%;
  height: 100%;
  display: flex;
  float: right;
  justify-content: space-around;
}
.nav-right .nva-item-content {
  display: inline-block;
  font-size: 1.6rem;
  color: #999;
  padding-top: 12px;
  text-align: right;
}

.back-top {
  position: fixed;
  right: 1.5rem;
  bottom: 120px;
  height: 39px;
  width: 39px;
  z-index: 999;
  opacity: 0.8;
  text-align: right;
  display: none;
}
.back-top span {
  display: inline-block;
  background: url(//static1.qianqian.com/web/st/images/icon-back2top2.af69f845890e1a53.png)
    no-repeat 0 0;
  background-size: 39px 39px;
  width: 39px;
  height: 39px;
}

.li-tip {
  text-align: center;
}
.li-tip .tip-text {
  font-size: 14.5px;
  color: #999;
}
</style>

