<template>
  <div class="assemblybox">
    <input-com :name='name'
               ref="inputs"></input-com>
    <list-com :listData='listData'
              @changeName1='changeName'></list-com>
  </div>
</template>
<script>
import InputCom from './InputCom'
import ListCom from './ListCom'

export default {
  components: { InputCom, ListCom },
  data () {
    return {
      name: '聊天室',
      listData: [
        {
          name: '米恩',
          img: require('./../../assets/chat/01.jpg')
        }, {
          name: '黛西',
          img: require('./../../assets/chat/02.jpg')
        }, {
          name: '罗娜',
          img: require('./../../assets/chat/03.jpg')
        }, {
          name: '西蒙',
          img: require('./../../assets/chat/04.jpg')
        }, {
          name: '杰克',
          img: require('./../../assets/chat/05.jpg')
        }, {
          name: '洛斯',
          img: require('./../../assets/chat/06.jpg')
        }, {
          name: '安娜',
          img: require('./../../assets/chat/07.jpg')
        }, {
          name: '索罗',
          img: require('./../../assets/chat/08.jpg')
        }
      ]
    }
  },
  mounted () {
    console.log(this.$refs)
  },
  methods: {
    changeName (val) {
      this.name = val
    }
  }
}
</script>
<style scoped>
.assemblybox {
  text-align: left;
  width: 60%;
  height: 800px;
  background: #141652;
  margin: 0 auto;
}
</style>
