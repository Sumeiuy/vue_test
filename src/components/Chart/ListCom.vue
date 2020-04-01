<template>
  <div class="listbox">
    <ul>
      <li v-for="(item,index) in listData"
          @click="userChange(item.name)"
          :key='index'>
        <span>{{item.name}}</span>
        <img :src="item.img"
             alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ListCom',
  data () {
    return {

    }
  },
  props: ['listData'],
  methods: {
    userChange: function (item) {
      console.log(item)
      this.$emit('changeName1', item)
    }
  }
}
</script>
<style scoped>
.listbox {
  color: #fff;
  width: 24%;
  float: right;
}
.listbox ul {
  float: right;
  padding: 20px;
  background: #141652;
}
.listbox ul li {
  position: relative;
  margin: 0 10px;
}
.listbox ul li span {
  position: absolute;
  top: 20%;
  float: left;
  width: 100px;
  box-sizing: border-box;
  padding: 10px 20px;
}
.listbox ul li img {
  margin-left: 60px;
  width: 80px;
  border-radius: 50%;
}
</style>
