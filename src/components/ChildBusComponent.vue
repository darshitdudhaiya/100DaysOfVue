<template>
  <div class="child-container">
    <h2>Child Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { EventBus } from '../hooks/bus'

export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    EventBus.on('message', (msg) => {
      this.message = msg
    })
  }
}
</script>

<style scoped>
.child-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #42b983;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  color: #42b983;
}

p {
  font-size: 1.2rem;
  color: #333;
}
</style>
