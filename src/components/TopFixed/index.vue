<template>
  <div class="container">
    <div class="banner"
         ref="bannerRef">
      Banner
    </div>
    <div :class="' nav'+( isFixed ?' fixed':'')"
         ref="navRef">
      TopFixed
    </div>
    <div class="list">
      DataList
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: false,
      navTop: ''
    }
  },
  mounted () {
    window.onscroll = this.viewScroll
    this.navTop = this.$refs.navRef.offsetHeight
    this.screenTop = document.documentElement.scrollTop
    // console.log(this.$refs.navRef.offsetTop)
  },
  beforeDestroy () {
    // 销毁滚动事件，避免其他页面报错
    window.onscroll = null
  },
  methods: {
    viewScroll () {
      // 滚动高度
      console.log(document.documentElement.scrollTop, '----top')
      // 网页被卷去的高
      console.log(this.$refs.navRef.offsetHeight, '-----offsetHeight')
      if (document.documentElement.scrollTop >= this.navTop) {
        this.isFixed = true
        // console.log('fixed')
      } else if (document.documentElement.scrollTop < this.navTop) {
        this.isFixed = false
        // console.log('unfixed')
      }
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: burlywood;
}
.container .banner {
  position: relative;
  min-height: 120px;
  background: #fafafa;
  box-shadow: 1px 2px 6px #000;
}
.container .nav {
  max-height: 100px;
  padding: 20px 0;
  background: khaki;
  position: relative;
}
.container .list {
  min-height: 1200px;
  background: seagreen;
}
.container .fixed {
  max-height: 100px;
  padding: 20px 0;
  background: khaki;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  /* height: 100%; */
}
.container .unfixed {
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  height: 100%;
}
</style>
