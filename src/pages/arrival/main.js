import Vue from 'vue'
import Arrival from './Arrival.vue'


Vue.config.productionTip = false
Arrival.myType = 'arrival'


const arrival = new Vue(Arrival)
arrival.$mount()