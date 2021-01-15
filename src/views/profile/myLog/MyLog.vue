<template>
  <div class="main">
    <p @click="goPage">我的文章</p>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  },
  methods: {
    goPage () {
      this.$router.push('/')
    }
  }

}
</script>
<style lang="less" scoped>
  .main{
    p{
      color: green;
      cursor: pointer;
    }
  }
</style>
