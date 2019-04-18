import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home'
import Chat from '@/pages/Chat/Chat'
import Search from '@/pages/Search/Search'
import Recommend from '@/pages/Recommend/Recommend'
import Me from '@/pages/Me/Me'

import Hot from '../pages/Home/Children/Hot/Hot'
import Dress from './../pages/Home/Children/Dress'
import Elec from './../pages/Home/Children/Elec'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Phone from './../pages/Home/Children/Phone'
import Shoes from './../pages/Home/Children/Shoes'
import UnderClothes from './../pages/Home/Children/UnderClothes'

import Login from './../pages/Login/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {path: "hot", component: Hot, meta: {showBottomTab: true}},
        {path: "dress", component: Dress},
        {path: "elec", component: Elec},
        {path: "general", component: General},
        {path: "man", component: Man},
        {path: "mbaby", component: Mbaby},
        {path: "phone", component: Phone},
        {path: "shoes", component: Shoes},
        {path: "underClothes", component: UnderClothes},
        {path: "/home", redirect: 'hot'},
      ]
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {showBottomTab: true}
    },
    {
      path: '/search',
      component: Search,
      meta: {showBottomTab: true}
    },
    {
      path: '/chat',
      component: Chat,
      meta: {showBottomTab: true}
    },
    {
      path: '/me',
      component: Me,
      meta: {showBottomTab: true}
    },
    {
      path: '/login',
      component: Login,
      meta: {showBottomTab: false}
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
