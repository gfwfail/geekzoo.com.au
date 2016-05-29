<template>
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="/leading"><span>GeekZoo</span></a> </div>
          <div class="collapse navbar-collapse"
          id="navbar-collapse">
              <ul class="nav navbar-nav">
                  <li>
                      <a href="/posts"> <i class="fa fa-home"></i> <span class="hidden-sm">社区</span> </a>
                  </li>
                  <li>
                      <a href="/topics"> <span class="hidden-sm">标签</span> </a>
                  </li>
                  <li>
                      <a href="/about"> <span class="hidden-sm">关于</span> </a>
                  </li>
                  <li> </li>
              </ul>
              <form class="navbar-form navbar-left query-posts-form ng-pristine ng-valid" role="search" action="/posts/search">
                  <div class="form-group">
                      <input class="form-control" name="q" placeholder="搜索文章" value=""> </div>
                  <input type="hidden" name="_csrf" value="8f42586b-9187-4396-996f-262ee053401f">
              </form>
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="/me/#login"><span>登录</span></a></li>
                  <li><a href="/me/#register"><span>注册</span></a></li>
              </ul>
          </div>
      </div>
  </nav>
</template>
<script>
export default {
  name:'Header'
}
</script>
