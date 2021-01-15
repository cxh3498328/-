<template>
  <div class="active">
    <div class="mask">
      提示语
    </div>
    <div class="container">
      <div class="head">

      </div>
      <div class="content">
        123
      </div>
      <div class="foot">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '提示'
    }
  }
}
</script>
<style lang="less" scoped>
  .active{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
