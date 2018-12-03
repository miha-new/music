import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Search from './views/Search.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
