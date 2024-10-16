<template>
  <div class="container">
    <h2>Child Component</h2>
    <button @click="sendAlert">Click to Emit Event</button>
  </div>
</template>

<script>
export default {
  name: 'ChildEmitComponent',
  methods: {
    sendAlert() {
      this.$emit('alert-parent', 'Hello from Child!')
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #358a63;
}
</style>
