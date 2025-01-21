<template>
  <nav class="navbar">
      <div class="wrapper">
          <div class="logo">
              <router-link to="/">
                  <img src="@/assets/logo.png" alt="logo"/>
              </router-link>
          </div>
          <ul class="nav-links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/products">My Card</router-link></li>
              <li><router-link to="/about">About</router-link></li>
          </ul>
      </div>
  </nav>
  
  
  </template>
  <script>
  import logo from '@/assets/logo.png';
  export default {
      name: "MyBar",
    data() {
      return{
        logo,
      }
    },
  };
  </script>
  
  <style>
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: rgb(255, 0, 0);
  }
  
  li {
      float: left;
  }
  
  li a{
      display: block;
      color: wheat;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
  }
  
  li a:hover {
      background-color: #024100;
  }
  </style>
  <style scoped>
  /* Navbar Styles */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap&quot%27");
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  .navbar {
    background-color: #252525;
    color: #ece2e2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0px 0px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
   
  .wrapper {
    position: relative;
    max-width: 1300px;
    height: 140px;
    line-height: 70px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
   
  .wrapper .logo img {
    display: flex;
    align-items: center;
    width: 120px;
    height: auto;
    margin-top: 10px;
    margin-right: 10px;
  }
  
  .wrapper .nav-links {
    display: inline-flex;
    z-index: 10;
  }
  
  .nav-links li {
    list-style: none;
  }
  
  .nav-links li a {
    color: #f2f2f2;
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    padding: 9px 15px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  .nav-links li a:hover {
    background: #111111;
  }
  
  .nav-links .mobile-item {
    display: none;
  }
  </style>
