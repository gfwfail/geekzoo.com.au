<template>
<div class="row thread">
  <span class="badge pull-right">4</span>

 <img :src="'http://lorempixel.com/50/50/?'+Math.random()" alt="" class="thread-avatar img-circle">
 <div class="thread-title">
  <a v-link="'/post/'+id">{{title||'(无标题)'}}</a>
   <div class="thread-meta">
     <span class="tag" v-for="tag in tags">{{tag}}</span>

     <span class="bullet">•</span>
     <span class="author">{{Author||'匿名'}}</span>
     <span class="bullet">•</span>
     <span class="time">10分钟前</span>

   </div>
 </div>

</div>

</template>
<script>
export default {
  name:'ThreadEntity',
  props: {
    id:Number,
    title:String,
    tags:Array,
    Author:String
  }

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
