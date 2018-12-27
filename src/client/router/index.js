import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home'
import Communication from './../components/Communication'
import CreateMsg from './../components/CreateMsg'
import Index from './../components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      alias: '/x34ysd765kuysdksnst56mb9m',
      name: 'Home',
      component: Home
    },
    {
      path: '/communication',
      alias: '/zkj4dnhstd3hdhd7fhd4fvwsg7',
      name: 'Communication',
      component: Communication
    },
    {
      path: '/msg',
      alias: '/khhsn5hfbdj2j6jgski86gvnhc',
      name: 'CreateMsg',
      component: CreateMsg
    }
  ]
})
