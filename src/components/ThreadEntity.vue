<template>
<div class="row thread">
  <span class="badge pull-right">4</span>

 <img :src="avatar" alt="" class="thread-avatar img-circle">
 <div class="thread-title">
  <a v-link="'/post/'+id">{{title||'(无标题)'}}</a>
   <div class="thread-meta">
     <span class="tag" v-for="tag in tags">{{tag}}</span>

     <span class="bullet">•</span>
     <span class="author">{{author||'匿名'}}</span>
     <span class="bullet">•</span>
     <span class="time">{{ created_at }}</span>

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
    author:String,
    avatar:String,
    created_at:String
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
