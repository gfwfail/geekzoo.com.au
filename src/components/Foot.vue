<style lang="scss" scoped>

.geek-footer {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 100px;
    color: #99979c;
    text-align: center;
    background-color: #333;
    & a{
      color:#ddd;
    }
}

</style>

<template>

<footer class="geek-footer" role="contentinfo">
    <div class="container">
      <p>&copy;2016 Geekzoo.com.au</p>
        <p>Powered By Helmut Ye <span class="text-danger">♥</span></p>
    </div>
</footer>

</template>

<script>

export default {
    name: 'Footer'
}

</script>
