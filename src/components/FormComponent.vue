<template>
    <div class="form-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
  
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
  
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
  
        <button type="submit">Submit</button>
      </form>
  
      <div v-if="submitted">
        <h3>Form Submitted Successfully!</h3>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"FormComponent",
    data() {
      return {
        name: '',
        email: '',
        password: '',
        submitted: false
      }
    },
    methods: {
      handleSubmit() {
        if (this.name && this.email && this.password) {
          this.submitted = true;
        } else {
          alert('Please fill in all fields.');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    color: black;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #358a63;
  }
  </style>
  