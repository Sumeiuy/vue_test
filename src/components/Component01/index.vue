<template>
  <div>
    <component :is="who"></component>
    <div>
      <el-button @click="who='index-com'">index</el-button>
      <el-button @click="who='home-com'">home</el-button>
      <el-button @click="who='info-com'">info</el-button>
    </div>
  </div>
</template>

<script>
import IndexCom from './IndexCom'
import HomeCom from './HomeCom'
import InfoCom from './InfoCom'

export default {
  data () {
    return {
      who: 'info-com',
    }
  },
  components: { IndexCom, HomeCom, InfoCom },
}
</script>
<style scoped>
</style>
