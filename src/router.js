import Vue from 'vue';
import Router from 'vue-router';

import Statistiques from './views/Statistiques.vue';
import PersonalBlog from './views/PersonalBlog.vue';
import Travailleurs from './views/Travailleurs.vue';
import AddNewPost from './views/AddNewPost.vue';
import Demandes from './views/Demandes.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Configurations from './views/Configurations.vue';
import BlogPosts from './views/BlogPosts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/statistique',
    },
    {
      path: '/statistique',
      name: 'stat',
      component: Statistiques,
    },

    {
      path: '/user-profile-lite',
      name: 'travailleurs',
      component: Travailleurs,
    },
    {
      path: '/configurations',
      name: 'configurations',
      component: Configurations,
    },
    {
      path: '/demandes',
      name: 'demandes',
      component: Demandes,
    },


    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
    },
    
    
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: BlogPosts,
    }, {
      path: '*',
      redirect: '/errors',
    },
  ],
});
