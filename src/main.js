import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './App'

import HomePage from './pages/HomePage.vue'

var VueRouter = require('vue-router')



/* eslint-disable no-new */


Vue.use(Vuex)
Vue.use(Router)
Vue.use(Resource)
var router = new Router()

router.map({
	'/': {
		component: HomePage
	},
})

router.start(App, 'body')
