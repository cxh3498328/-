<template>
  <div :class="{showPosition:right}" class="main">
    <div class="rate-star">
      <div v-for="index in iconNumber" class="icon-item" @click="clickChange(index)" :key="index">
        <img class="icon" :src="(currentIndex >= index)?selected:unselect">
      </div>
    </div>
    <div  class="rate-tip" :class="{rateTipBottom:!right}">
      <p>{{rateTip}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RateStar',
  props: ['right'],
  data () {
    return {
      currentIndex: 5, // 初始化选中数 range 1~5
      iconNumber: 5, // icon的数量
      selected: require('./images/star.png'), // 选中的图片素材
      unselect: require('./images/ustar.png'), // 未选中的图片素材
      rateTip: '非常满意', // 展示提示语
      content: ['非常不满意', '不满意', '一般', '满意', '非常满意'] // 提示语 arr
    }
  },
  methods: {
    clickChange (index) { // 点击事件
      this.currentIndex = index
      this.rateTip = this.content[index - 1]
      this.$emit('score', { // 发送父组件接受
        score: this.currentIndex
      })
    }
  }
}
</script>
<style lang='less'>
.showPosition{
  display: flex;
}
.main{
  font-size: .18rem;
  .rate-star{
  flex: 2 ;
  display: flex;
  overflow: scroll;
  .icon-item{
    flex: 1;
    text-align: center;
    .icon{
      width: .2rem;
      height: auto;
      vertical-align: middle;
      }
    }
  }
  .rate-tip{
    flex: 1;
    text-align: center;
    p{
      vertical-align: middle;
    }
  }
  .rateTipBottom{
    padding: 15px 0;
    font-size: .18rem;
  }
}

</style>
