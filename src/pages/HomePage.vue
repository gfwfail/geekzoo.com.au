<style>



</style>

<template>

<div class="row tag-list">
    版块:
    <span class="tag" v-for="1 in 14" track-by="$index" :class="{'active':$index==0}">
  <a href="#tag">PHP</a>
  </span>
</div>
<Thread v-for="1 in 15"></Thread>

</template>

<script>

import Thread from '../components/ThreadEntity'

export default {
    components: {
        Thread
    }
}

</script>
