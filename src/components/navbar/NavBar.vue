<template>
  <div id="nav-bar">
    <span>{{navName}}</span>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  props: ['navName'],
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  #nav-bar{
    font-size: 1rem;
    line-height: 1.5;
    padding: .625rem 1rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    background: white;
    text-align: center;
  }
</style>
