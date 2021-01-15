<template>
  <div id="app">
    <!-- <transition name="fade"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navName: "首页",
    };
  },
  created() {
    this.$pConfig.flexible();
    this.updateHtmlFile();
    this.getSystemVersion();
  },
  methods: {
    // 更新html文件
    updateHtmlFile() {
      const originalParameter = JSON.parse(JSON.stringify(this.$route.query)); // 原路由参数

      // 增加时间戳
      Object.assign(originalParameter, {
        v: new Date().valueOf(),
      });

      this.$router.push({
        query: originalParameter,
      });
    },
    // 获取系统版本号
    async getSystemVersion() {
      const res = {};
      if (!res) {
        return;
      }

      // 本地版本号
      const lsSystemVersion = window.localStorage.getItem("system_version");

      if (isNaN(parseFloat(lsSystemVersion))) {
        // 不存在版本号
        window.localStorage.setItem("system_version", res.result); // 存储版本号
      } else {
        // 存在版本号
        if (parseFloat(lsSystemVersion) !== parseFloat(res.result)) {
          // 版本号不同
          window.localStorage.setItem("system_version", res.result); // 更新版本号
          window.location.reload(); // 项目重载
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
