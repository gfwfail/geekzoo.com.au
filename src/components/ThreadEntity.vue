<template>
<div class="row thread">
  <span class="badge pull-right">4</span>

 <img :src="'http://lorempixel.com/50/50/?'+Math.random()" alt="" class="thread-avatar img-circle">
 <div class="thread-title">
  <a href="#">分享一段 flask 分页代码</a>
   <div class="thread-meta">
     <span class="tag">PHP</span>
     <span class="bullet">•</span>
     <span class="author">Automan</span>
     <span class="bullet">•</span>
     <span class="time">10分钟前</span>

   </div>
 </div>

</div>

</template>
<script>
export default {
  name:'ThreadEntity'
}
</script>
<style lang="scss" scoped>
@import "../theme/_variables.scss";
.thread {
  padding:10px;
  border-bottom:solid 1px #eee;
  &:last-child {
    border-bottom:0;
  }
  &-title {
    font-size:1.2em;
    & a {
      color:#333;
      &:hover {
        color:$brand-success;
        text-decoration: none; 
      }
    }
  }
  &-avatar {
    float:left;
    height:50px;
    width:50px;
    margin-right:10px;
  }
  &-meta {
    margin:0;
    padding:0;
    font-size:12px;
    color:#999;

  }
}
</style>
