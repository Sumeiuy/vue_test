<template>
  <div class="container">
    {{getDate()}}
    <h3>{{getDate1}}</h3>
    <h2>{{title}}</h2>
    <el-input type="text"
              v-model="title"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '哈哈哈'
    }
  },
  watch: {
    title (newVal, oldVal) {
      console.log(newVal, '----newVal', oldVal, '=====oldVal')
    }
  },
  computed: {
    // computed里面的是属性
    getDate1 () {
      return new Date() + '计算属性'
    }
  },
  methods: {
    getDate () {
      return new Date()
    }
  }
}
</script>

<style scoped>
.container {
}
</style>
