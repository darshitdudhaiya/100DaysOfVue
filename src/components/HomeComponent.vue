<template>
  <div>
    <h1 v-on:mouseover="textHovered()">Hover Me</h1>
    <h1>Count: {{ count }}</h1>

    <br />

    <button class="styled-button" v-on:click="getAlert()">Click Me For Alert</button> <br />
    <button class="styled-button" v-on:click="increment()">Click Me For Increment</button> <br />
    <button class="styled-button" v-on:dblclick="doubleIncrement()">Double Click Me For Increment</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      count: 0
    }
  },

  methods: {
    getAlert() {
      alert('Hello Vue!!')
    },

    increment() {
      this.count = this.count + 1
    },

    doubleIncrement() {
      this.count = this.count + 2
    },

    textHovered() {
      console.log('Text Hovered...')
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

.styled-button {
  background-color: #42b983; 
  color: white; 
  border: none; 
  padding: 10px 20px; 
  margin: 5px; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}

.styled-button:hover {
  background-color: #36a76c; 
}
</style>
