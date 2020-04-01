import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld/index'
import Box01 from '@/components/Box01/index'
// 封装的tab
import Tab from '@/components/Tab/index'
// 生命周期
import LifeCycle from '@/components/LifeCycle/index'
// 父组件传值给子组件 (qq聊天框)
import Chart from '@/components/chart/index'
// ecarts
import Echarts from '@/components/Echarts/index'
// login
import Login from '@/components/Login/index'
// Component01动态组件
import Component01 from '@/components/Component01/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Box01',
    component: Box01
  }, {
    path: '/Tab',
    name: 'Tab',
    component: Tab
  }, {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: LifeCycle
  }, {
    path: '/Chart',
    name: 'Chart',
    component: Chart
  }, {
    path: '/Echarts',
    name: 'Echarts',
    component: Echarts
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/Component01',
    name: 'Component01',
    component: Component01
  }]
})
