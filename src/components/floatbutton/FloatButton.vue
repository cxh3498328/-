<template>
<!-- 使用自定义icon时文件需要使用require引入，否则将会造成404丢失问题 -->
  <div id="float-button">
    <el-button type="primary" size="mini" @click="index" :style="{backgroundColor:btnColor,borderColor:btnColor}" circle>
      <img id="icon" :src= btnImage >
    </el-button>
  </div>
</template>
<script>
const defalutIcon = require('./images/default.png')
export default {
  name: 'FloatButton',
  props: ['icon', 'color'],
  data () {
    return {
      btnColor: this.color || '#66b1ff',
      btnImage: this.icon || defalutIcon
    }
  },
  methods: {
    index () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
  #float-button{
    position: absolute;
    bottom: 3.75rem;
    right: 0;
    img{
      width: 1.25rem;
    }
  }
</style>
