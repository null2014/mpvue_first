import Vue from 'vue'
import Detail from './Detail.vue'


Vue.config.productionTip = false
Detail.myType = 'detail'

const detail = new Vue(Detail)
detail.$mount()