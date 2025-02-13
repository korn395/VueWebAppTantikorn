<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const items = ref([]);
const product = computed(() =>
  items.value.find((item) => item.id === parseInt(id))
);

onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      items.value = [data];
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
});

const getImageUrl = (path) => {
  return new URL(`/${path}`, import.meta.url).href;
};
</script>

<template>
  <div v-if="product" class="container">
    <div class="left-column">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="right-column">
      <div class="product-description">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
      </div>
      <p class="product-price">Price: {{ product.price }} $</p>
      <router-link to="/products">
        <button class="cart-btn">Back to Products</button>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h1>Product not found or loading...</h1>
    <router-link to="/products">
      <button>Go back to the product list</button>
    </router-link>
  </div>
</template>


<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  margin-top: 15%;
}

.left-column {
  width: 65%;
  padding: 10px 15px;
  margin-left: 55px;
}

.left-column img {
  border-radius: 5px 5px 0 0;
  height: 600px;
  width: 600px;
}

.right-column {
  width: 65%;
  margin-top: 390px;
}

.product-description {
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
}

.product-description h1 {
  font-weight: bolder;
  font-size: 52px;
  color: #43484d;
  letter-spacing: -2px;
}

.product-description p {
  font-size: 24px;
  font-weight: bold;
  color: #868686;
  line-height: 24px;
}

.product-price {
  display: flex;
  font-weight: bold;
  align-items: center;
}

.cart-btn {
  display: inline-block;
  background-color: #05a18c;
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 30px;
  margin-top: 5px;
  transition: all 0.5s;
}

.cart-btn:hover {
  background-color: #64af3d;
}

@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
  }
}

@media (max-width: 768px) {
  .left-column img {
    width: 220px;
  }
}
</style>