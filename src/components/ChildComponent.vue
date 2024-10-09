<template>
  <div>
    <h1>Child Component</h1>
    <h2>user: {{ user }}</h2>
    <h2>user: {{ details.email }}</h2>

    <br />
    <br />

    <button @click="getData" class="styled-button">Click Me</button>
  </div>
</template>
<script>
export default {
  name: 'ChildComponent',
  props: {
    user: {
      type: String,
      required: true
    },
    details: {
      type: Object,
      required: true
    },
    getData: {
      type: Function,
      required: true
    }
  }
}
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
.styled-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
