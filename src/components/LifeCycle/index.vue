<template>
  <div>
    <span>{{msg}}</span>
  </div>
</template>
<script>
export default {
  name: 'smzq',
  data () {
    return {
      msg: 'hello world'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
    console.log(this)
    console.log(this.msg)
  },
  created () {
    console.log('created')
    console.log(this)
    console.log(this.msg)
  },
  beforeMount () {
    console.log('beforeMount')
    console.log(this)
    console.log(this.msg)
  },
  mounted () {
    console.log('mounted')
    console.log(this)
    console.log(this.msg)
  },
  methods: {

  }
}
</script>
