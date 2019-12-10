import Vue from 'vue'
import Index from './Index.vue'


Vue.config.productionTip = false
Index.myType = 'index'


const index = new Vue(Index)
index.$mount()