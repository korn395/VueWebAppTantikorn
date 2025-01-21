<script setup>
import mybar from './views/MyBar.vue';
</script>

<template>
  <div id="app">
    <mybar />
    <router-view/>
  </div>

</template>
<script>
  export default {
    name : "App",
    components : {
      mybar,
    },
  };
</script>