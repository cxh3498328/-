<template>
  <div>
    <rate-star :right="false" />
    <!-- <div class="help">
      <p>right:默认(false)</p>
      <p>true 左右布局</p>
      <p>false 上下布局</p>
    </div> -->
    <!-- <sms-button btnBg="#67c23a" time="10" fontColor="#fff"></sms-button>
    <div class="help">
      <p>time:默认(60)初始化倒计时长度</p>
      <p>btnBg:按钮背景色，默认<span style="display:inline-block;width:.16rem;height:.16rem;background-color:#67c23a;"></span>#67c23a</p>
      <p>fontColor: 按钮字体颜色,默认<span style="display:inline-block;width:.16rem;height:.16rem;background-color:#fff;"></span>#fff</p>
    </div> -->
    <img-upload  :fileLenght="6"  :upSame="1" @selectedIMG="getUpList" @removeIMG='removeList' />
    <div class="help">
      <p>fileLenght:上传的最大张数(默认5张)</p>
      <p>upSame:默认0(不可以) 1(可以)</p>
      <p>方法</p>
      <p>selectedIMG:选择完图片,返回全部选中的图片数组</p>
      <p>removeIMG:选择完图片,返回选中的图片索引</p>
    </div>
  </div>
</template>
<script>
import RateStar from '@/components/rate/RateStar.vue'
// import SmsButton from '@/components/smsbutton/SmsButton.vue'
import ImgUpload from '../components/imgUpload/ImgUpload.vue'
export default {
  name: 'zujianku',
  data () {
    return {
      upList: []
    }
  },
  methods: {
    getUpList (data) { this.upList = data },
    removeList (data) { this.upList.splice(data, 1) }
  },
  components: {
    RateStar,
    // SmsButton,
    ImgUpload
  }
}
</script>
<style lang='less'>
.help{
  font-size: .16rem;
  color: #666;
  text-indent:2em;
  line-height: 1.5;
  background: #eee;
  padding: 10px 0;
}
</style>
