<template>
  <div class="container"
       :class="myBg">
    <div :class="{red:temp}"
         class="mydiv">1</div>
    <div :class="{green:!temp}"
         class="mydiv">2</div>
    <div :class="{yellow:temp}"
         class="mydiv">3</div>
    <hr/>
    <div :class="myClass"
         class="mydiv">4</div>
    <button @click="temp =!temp">click me</button>
    <el-input v-model="myBg"
              aria-placeholder="请输入自定义背景色值"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      temp: true,
      myBg: 'skyblue'
    }
  },
  computed: {
    myClass () {
      return {
        pink: !this.temp,
        pinkWidth: !this.temp
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  height: 480px;
  min-width: 200px;
  background: skyblue;
}
.skyblue {
  background: skyblue;
}
.container .mydiv {
  width: 200px;
  height: 120px;
}
.red {
  background: red;
}
.green {
  background: green;
}
.yellow {
  background: yellow;
}
.pink {
  background: pink;
}
.pinkWidth {
  width: 260px !important;
}
</style>
