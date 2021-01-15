<template>
  <div class="main">
    <el-button @click="goPage">你好{{count}}</el-button>
    <el-button @click="openMessage">打开消息框</el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { verifyInfo } from '@/request/login/login'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    goPage () {
      // this.$router.push('/profile')
      verifyInfo('/login', { id: '007' })
    },
    openMessage () {
      this.$message('')
    }
  },
  computed: {
    // localComputed () {},
    ...mapState([
      'sessionId',
      'count'
    ])
  },
  components: {
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
