<style lang="scss">

@import './theme/_variables';
@import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables';
@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';
@import './theme/_bootswatch';
.navbar {
    border-top: solid 4px darken($brand-success, 10%);
    border-bottom: solid 1px $gray-lighter;
}
body {
  background-color: #e8e8e8;
}

@media (min-width: 1200px)
 {
   .wrap {
     padding-top:50px;
     padding-bottom: 50px;
     border-radius: 6px;
     margin-right: auto;
     margin-left: auto;
     background-color: #fff;
     width:1200px;
   }
 }
.btn,
a {
    transition: all 0.4s ease 0s;
}

.thread-list {
    border: solid 1px $gray-lighter;
    border-radius: 4px;
    background-color: #fff;

}

.tag-list {
    background: #ecf0f1;
    border-top-radius: 4px;
    padding: 20px;
    & .tag {
        font-size: 16px;
        background-color: darken(#ecf0f1, 20%);
        &.active {
            background-color: $brand-primary;
        }
    }
}
.hot-topic {
  padding:4px;
  border-bottom:solid 1px #eee;
  font-size:13px;
  color:$gray-dark;
  img {
    margin:10px 5px 0px 5px;
  }
}
.tag {
    color: #fff;
    background: $brand-success;
    padding: 2px 4px 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 5px;
    font-weight: bold;
    a {
        color: #fff;
        &:hover {
            color: #fff;
            text-decoration: none;
        }
    }
}

</style>

<template>

<Geek-Header>

</Geek-Header>
<div class="wrap"><div class="container">

    <div class="col-md-9 thread-list">
      <router-view></router-view>

    </div>
    <div class="col-md-3 ">

        <div class="panel panel-default">
            <div class="panel-heading">
                操作面板
            </div>
            <div class="panel-body">
                <button class="btn btn-success btn-block">
                    发表主题
                </button>

            </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" style="background:#fff;">
                热门主题
            </div>
            <div class="panel-body">
                <div v-for="1 in 15" class="hot-topic">
                  <img :src="'http://lorempixel.com/20/20/?'+Math.random()" alt="" class="pull-left">
                  	出一台 iPhone 6s 国行 64G 玫瑰金，全新未拆，¥5,200。
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading" style="background:#fff;">
                网站信息
            </div>
            <div class="panel-body">
               <ul>
                 <li>注册用户:<b>1</b></li>
                 <li>上线时间:<b>1天</b></li>
               </ul>
            </div>
        </div>

    </div>

</div>
</div>
<Geek-Footer></Geek-Footer>

</template>

<script>

import GeekHeader from './components/Head'
import GeekFooter from './components/Foot'
export default {
    replace:false,
    ready() {},
        components: {
            GeekHeader, GeekFooter
        }
}

</script>
