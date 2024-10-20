<template>
    <div class="container">
      <button class="toggle-btn" @click="show = !show">Toggle Text</button>
      <transition name="fade">
        <p v-if="show" class="fade-text">This text will smoothly fade in and out!</p>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransitionComponent',
    data() {
      return {
        show: true
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;
  }
  
  .toggle-btn {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .toggle-btn:hover {
    background-color: #358a63;
  }
  
  .fade-text {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #333;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  