<style>



</style>

<template>

<div class="row tag-list">
    版块:
    <span class="tag" v-for="1 in 14" track-by="$index" :class="{'active':$index==0}">
  <a href="#tag">PHP</a>
  </span>
</div>
<div class="spinner" v-show="threads == null"></div>
<Thread transition="fade" v-for="thread in threads" :created_at="thread.since" :avatar="thread.avatar" :id="thread.id" :title="thread.title" :author="thread.author" :tags="['PHP','VueJs']"></Thread>

</template>

<script>

import Thread from '../components/ThreadEntity'
import * as api from '../api'
export default {
    components: {
        Thread
    },
    data() {
        return {
            threads: null
        }
    },
    ready() {
      var self = this
        api.getAllthreads(this.$http).then(
          (xhr)=>{
            self.threads = xhr.data.data
          },
          (err)=>{
            console.log(err)
          }
        )
    }
}

</script>
