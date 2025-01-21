<template>
    <div class="container">
        <div class="body-text">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <button @click="goHome">Go To Home</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    methods: {
        goHome() {
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.body-text {
    text-align: center;
    font-family: Arial, sans-serif;
}
h1 {
    font-size: 2.5em;
    color: #333;
}
p {
    font-size: 1.2em;
    margin: 20px 0;
    color: #555;
}
button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: #0056b3;
}
</style>
