<template>
  <div>
    <div class="container">
      <div class="head-tags">
        <div class="tag">密码登录</div>
        <div class="tag">验证码登录</div>
      </div>
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
import { verifyInfo } from '@/request/login/login.js'
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {
    login () {
      verifyInfo()
    }
  }
}
</script>
<style lang="less" scoped>
  .container{
    padding: 0 .9375rem;
    .head-tags{
      display: flex;
      border-bottom: .2rem solid #e4e7ed;
      .tag{
        flex: 1;
        font-size: .16rem;
        // font-size: 24px;
        text-align: center;
      }
    }
  }
</style>
