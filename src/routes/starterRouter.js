import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Pages/Login.vue';
import Starter from '../views/Starter/SamplePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login',
      component: Login,
      children: [
        {
          path: 'login',
          name: 'login',
          components: { default: Starter }
        }
      ]
    }
  ],
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
