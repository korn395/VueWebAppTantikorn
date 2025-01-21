<script setup>
import { ref } from 'vue';

const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<template>
    <div class="container">
        <div class="buttons">
            <button @click="show = !show">Toggle List</button>
            <button @click="list.push(list.length + 1)">Push Number</button>
            <button @click="list.pop()">Pop Number</button>
            <button @click="list.reverse()">Reverse List</button>
        </div>

        <div class="list-container">
            <ul v-if="show && list.length" class="list">
                <li v-for="item in list" :key="item" class="list-item">{{ item }}</li>
            </ul>
            <p v-else-if="list.length" class="message">List is not empty, but hidden.</p>
            <p v-else class="message">List is empty.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #1c1e22;
    font-family: 'Helvetica Neue', sans-serif;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
}

.buttons {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 15px;
}

button {
    padding: 12px 25px;
    font-size: 1.1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #0056b3;
    transform: translateY(-4px);
}

button:active {
    transform: translateY(2px);
    background-color: #00408d;
}

.list-container {
    text-align: center;
    width: 100%;
}

.list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    justify-content: center;
}

.list-item {
    padding: 15px;
    background-color: #2c2f36;
    border-radius: 8px;
    border: 1px solid #3a3f47;
    color: #eaeaea;
    font-size: 1.3rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease, background-color 0.3s ease;
}

.list-item:hover {
    transform: scale(1.05);
    background-color: #444d57;
}

.message {
    font-size: 1.2rem;
    color: #ccc;
    margin-top: 20px;
    opacity: 0.8;
}
</style>

