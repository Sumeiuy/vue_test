<template>
  <div class="inputbox">
    <p>{{name}}</p>
  </div>
</template>
<script>

export default {
  props: ['name'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
.inputbox {
  color: #fff;
  display: inline-block;
  float: left;
  width: 74%;
  height: 100%;
  box-shadow: 1px 2px 10px #fff;
}
.inputbox p {
  padding: 20px;
  border-bottom: 1px solid #9294af;
}
</style>
