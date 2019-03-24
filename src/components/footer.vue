<!-- 底部菜单 -->
<template>
  <div class="footer">
    <div class="content">
      <router-link tag="span" to="/Hot" class="return">
        返回首页
      </router-link>
      <span>
        意见反馈
      </span>
    </div>  
    <div class="copyright">
        <span>
          A VUE.JS MUSIC PROJECT
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myfooter'
}

</script>
<style scoped>
.footer{
  width:95%;
  height:170px;
  margin:0 auto;
  margin-top:10px;
  background-color:#fff;
  overflow:hidden;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 8px -2px #ccc;
}
.return{
  border-right: 1px solid #cacaca
}
.footer .content{
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.footer .content span {
  display: inline-block;
  width: 50%;
  font-size: 15px;
  color: #666;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.copyright{
  width:100%;
  height: auto;
  margin-top:50px;
  text-align: center;
  color:#ccc;
}
</style>