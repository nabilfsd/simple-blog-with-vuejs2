import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'root',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/add-new-blog',
    name: "AddNewBlog",
    component: () => import('../components/add-new-post/AddNewBlog.vue')
  },
  {
    path: '/all-blog-posts',
    name: 'AllBlogPosts',
    component: () => import( /* webpackChunkName: "about" */ '../components/home/AllBlogPost.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/all-user',
    name: 'AllUser',
    component: () => import('../views/AllUser.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;