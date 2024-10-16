<template>
    <div>
      <h2>Child Component</h2>
      <button @click="throwError">Click to Throw Error</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      throwError() {
        throw new Error('An error occurred!');
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
  }
  button:hover {
    background-color: #358a63;
  }
  </style>
  