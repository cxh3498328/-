<template>
  <div class="sms-button">
    <button class="btn" :class="{getSms:disable}" :style="{backgroundColor:btnBg,color:fontColor}" @click="getCode" :disabled="disable">{{btnText}}</button>
  </div>
</template>
<script>
export default {
  name: 'SmsButton',
  props: ['btnBg', 'time', 'fontColor'],
  data () {
    return {
      btnText: '发送验证码',
      disable: false,
      initTime: this.time || 60 // 初始化时间
    }
  },
  methods: {
    getCode () {
      // ..do some things 在这里进行请求发送验证码
      this.changeBtnText() // 改变按钮样式
    },
    changeBtnText () {
      this.initTime = this.time || 60 // 初始化时间
      this.disable = true // 阻止用户在时间内重复点击
      var index = setInterval(() => { // 打开定时器
        if (this.initTime > 0) {
          this.initTime--
          this.btnText = this.initTime + '秒'
        } else {
          clearInterval(index)
          this.btnText = '重新发送'
          this.disable = false
        }
      }, 1000)
    }
  }
}
</script>
<style lang='less'>
  .sms-button{
    font-size: .16rem;
    .btn{
      border-radius: .04rem;
      border: 1px solid #f2f2f2;
      padding: .10rem;
      background-color:#67c23a;
      color: #fff;
    }
    .getSms{
      opacity: .6;
      min-width: .8rem;
    }
  }
</style>
