import { createWebHistory, createRouter } from 'vue-router';
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  { 
    path: '/', 
    component: Home 
  },

  { 
    path: '/about', 
    component: About 
  },

  { 
    path: '/products', 
    component: Products 
  },

  { 
    path: '/products/:id', 
    name: 'ProductDetail', 
    component: ProductDetail, 
    props: true 
  },

  { 
    path: '/productDetail/:productId', 
    name: 'ProductDetailAlt', 
    component: ProductDetail, 
    props: (route) => ({ id: route.params.productId }) 
  },

  { 
    path: '/:catchAll(.*)', 
    name: 'NotFound', 
    component: NotFound 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;   
