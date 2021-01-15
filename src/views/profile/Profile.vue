<template>
  <div class="main">
    <p @click="goPage">个人中心,你好{{id}}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  props: ['id'],
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
