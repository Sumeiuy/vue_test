<template>
  <div>
    <component :is="who"></component>
    <div class="mtop">
      <el-button size='small'
                 type="primary"
                 @click="who='index-com'">index</el-button>
      <el-button size='small'
                 type="primary"
                 @click="who='home-com'">home</el-button>
      <el-button size='small'
                 type="primary"
                 @click="who='info-com'">info</el-button>
    </div>
    <p class="mtop">以下使用了：keep-alive</p>
    <keep-alive>
      <component :is="who"></component>
    </keep-alive>
  </div>
</template>

<script>
import IndexCom from './IndexCom'
import HomeCom from './HomeCom'
import InfoCom from './InfoCom'

export default {
  components: { IndexCom, HomeCom, InfoCom },
  data () {
    return {
      who: 'info-com'
    }
  }
}
</script>
<style scoped>
.mtop {
  margin: 20px 0;
}
</style>
