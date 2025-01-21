<script setup>
import Mycard from './MyCard.vue';
import items from '../Products.json';
</script>

<template>
  <main>
    <div class="tx">
      <h1>Products</h1>
    </div>
    <div class="grid-container">
      <Mycard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :detail="item.detail"
        :coverimage="item.coverimage"
      />
    </div>
  </main>
</template>

<style scoped>
.tx {
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  padding: 0 90px;
  font-size: 20px;
  font-weight: 600;
}

main {
  margin-top: 60px;
  padding: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 400px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
