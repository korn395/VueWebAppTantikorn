<template>
  <div class="card">
    <img :src="coverimage" alt="name" style="width:100%" />
    <div class="container">
      <h1>{{ name }}</h1>
      <p class="price">{{ price }}</p>
      <p>{{ detail }}</p>

      <router-link :to="`/products/${id}`">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      default: "",
    },
    coverimage: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  max-width: 350px;
  margin: auto;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: "Roboto", sans-serif;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.container {
  padding: 20px;
}

h1 {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  margin: 10px 0;
}

.price {
  color: #0f0;
  font-size: 1.2em;
  margin-bottom: 10px;
}

p {
  color: #ccc;
  font-size: 0.9em;
  margin-bottom: 15px;
}

button {
  border: none;
  outline: 0;
  padding: 12px;
  color: #000;
  background-color: #0f0;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #00ff00;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
    margin: 10px;
  }

  h1 {
    font-size: 1.3em;
  }

  .price {
    font-size: 1em;
  }

  button {
    font-size: 16px;
  }
}
</style>
