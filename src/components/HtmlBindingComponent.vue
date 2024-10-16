<template>
    <div class="container">
      <p>HTML Binding In Vue.Js</p>
    </div>
  
    <!-- Normal Text Binding -->
    <div class="container">
      <h1>
        {{ text }}
      </h1>
    </div>
  
    <!-- HTML Binding with v-html -->
    <div class="container" v-html="tag"></div>
  </template>
  
  <script>
  export default {
    name: 'HomeComponent',
    data() {
      return {
        text: 'Hello, this is normal text',
        tag: '<h1>This is a HTML Tag rendered using v-html</h1>'
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
  }
  
  p {
    font-size: 70px;
    color: #42b983;
  }
  
  h1 {
    color: #e5e6e8;
  }
  </style>
  