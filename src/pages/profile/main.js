import Vue from 'vue'
import Profile from './Profile.vue'


Vue.config.productionTip = false
Profile.myType = 'profile'


const profile = new Vue(Profile)
profile.$mount()