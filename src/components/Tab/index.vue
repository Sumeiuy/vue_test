<template>
  <div>
    <div class="content">
      <p v-if="tab==1">java</p>
      <p v-else-if="tab==2">php</p>
      <p v-else>js</p>
    </div>
    <button @click="tabChange"
            data-id="1">java</button>
    <button @click="tabChange"
            data-id="2">php</button>
    <button @click="tabChange"
            data-id="3">js</button>
  </div>
</template>
<script>
export default {
  name: '封装的tab',
  data () {
    return {
      tab: 1
    }
  },
  methods: {
    tabChange: function (e) {
      console.log(e)
      let dataId = e.target.dataset.id
      this.tab = dataId
    }
  }
}
</script>
