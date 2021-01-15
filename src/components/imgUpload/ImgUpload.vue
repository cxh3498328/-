<template>
  <div class="main">
    <div class="upload-con">
      <div v-for="(item,index) of previewList" :key="index" class="image-item">
        <img src="@/assets/images/sc.png" class="close-btn" @click="removeIMG(index)" />
        <img :src="item" />
      </div>
      <div class="add-btn">
        <img src="@/assets/images/tjtp.png" />
        <input  type="file" @change="selectFile($event)" ref="referenceUpload"  accept="jpeg,jpg,png" multiple/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['fileLenght', 'upSame'],
  name: 'ImgUpload',
  data () {
    return {
      upLoadArr: [], // 需要上传的文件数组
      previewList: [], // 预览图片数组
      maxLength: this.fileLenght || 5, // 最大文件长度
      upLoadSame: (this.upSame === 1) // 能否上传相同图片
    }
  },
  methods: {
    // 预览图片
    previewIMG (item) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.previewList.push(e.target.result)
      }
      reader.readAsDataURL(item)
    },
    // 选择图片
    selectFile (e) {
      if (e.target.files.length === 0 || this.upLoadArr.length + e.target.files.length > this.maxLength) {
        console.log('最多只能上传' + this.maxLength + '张')
        return
      }
      var tempArr = [] // 暂存需要进行处理的数组
      for (let i = 0; i < e.target.files.length; i++) {
        tempArr.push(e.target.files[i])
      }
      if (this.upLoadArr.length > 0) {
        // 不能添加相同的图片
        if (!this.upLoadSame) {
          this.upLoadArr.forEach(function (item) {
            let sameIndex = -1 // 记录相同的图片位置
            tempArr.forEach(function (currentItem, index) {
              if (currentItem.name === item.name) { sameIndex = index }
            })
            if (sameIndex >= 0) { tempArr.splice(sameIndex, 1) } // 移除
          })
        }
        tempArr.forEach((item) => {
          this.upLoadArr.push(item)
          this.previewIMG(item)
        })
      } else {
        for (let i = 0; i < e.target.files.length; i++) {
          this.upLoadArr.push(e.target.files[i])
          this.previewIMG(e.target.files[i])
        }
      }
      // 解决同一时间内不能重复添加相同的一张图片
      if (this.upLoadSame) { this.$refs.referenceUpload.value = '' }
      this.$emit('selectedIMG', this.upLoadArr)
    },
    // 移除图片
    removeIMG (index) {
      this.upLoadArr.splice(index, 1) // 移除
      this.previewList.splice(index, 1) // 移除
      this.$emit('removeIMG', index)
    }
  }
}
</script>
<style lang='less'>
.main{
  font-size: .16rem;
  .upload-con{
    display: flex;
    padding: 0 .2rem;
    flex-wrap: wrap;
    .image-item{
      position: relative;
      margin-right: .15rem;
      .close-btn{
        width: .24rem;
        height: auto;
        position: absolute;
        right: -.12rem;
        top: -.12rem;
      }
      max-width: .96rem;
      min-width: .96rem;
      max-height: .96rem;
      min-height: .96rem;
      padding-bottom: .1rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .add-btn{
    overflow: hidden;
    width: .96rem;
    height: .96rem;
    img{
      width: .96rem;
      height: .96rem;
    }
    input{
      width: .96rem;
      height: .96rem;
      position: relative;
      bottom: 1.2rem;
      z-index: 1;
      opacity: 0;
      &:focus{
        outline: none;
      }
    }
  }
}
</style>
