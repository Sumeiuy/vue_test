<template>
  <div>
    <h3>数据绑定</h3>
    <p style="margin: 10px 0">当前值：{{count}}</p>
    <p style="margin: 10px 0">{{count>10 ? '数据大于10' : '数据小于10'}}</p>
    <el-button type="primary"
               size="small"
               @click="add(5)">增加</el-button>
    <el-button type="primary"
               size="small"
               @click="desc(3)">减少</el-button>
    <div>
      <div class="box"
           @mousemove="move">
        <p>x坐标：{{x}}</p>
        <p>y坐标：{{y}}</p>
        <span @mousemove="stop">停止鼠标事件</span>
        <h1 @mousemove.stop>停止鼠标事件1</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    add (step) {
      // 想要count返回的是数值，先进行-0在进行+
      this.count += step - 0
      // console.log(this.count, '===count', step, '=====step')
    },
    desc (step) {
      this.count -= step
      // console.log(this.count, '===count', step, '=====step')
    },
    move (e) {
      // console.log(e, '===e')
      this.x = e.clientX
      this.y = e.clientY
    },
    stop (e) {
      e.stopPropagation()
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid lawngreen;
}
.box:hover {
  cursor: pointer;
}
.box p {
  padding: 20px 0;
}
.box h1 {
  padding: 10px;
  margin: 10px;
  border: 1px solid khaki;
}
</style>
