<template>
    <div class="card">
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent'
  }
  </script>
  
  <style scoped>
  .card {
    height: 600px;
    width: 800px;
    color: #42b983;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 40px; /* More padding for content */
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures even spacing between sections */
  }
  
  .card-header, .card-footer {
    padding: 10px 0; /* Padding between the content and edges */
    text-align: center; /* Center-align header and footer */
    font-size: 1.5rem; /* Slightly larger font */
  }
  
  .card-body {
    flex-grow: 1; /* This allows the body to take up more space */
    padding: 20px 0;
    text-align: left;
    font-size: 1.2rem;
  }
  
  button {
    background-color: #42b983;
    color: white;
    padding: 12px 24px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #358a63;
  }
  </style>
  