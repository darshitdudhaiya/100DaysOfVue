<template>
  <div class="parent-container">
    <h1>Parent Component</h1>
    <button @click="sendMessage" class="btn">Send Message to Child</button>
    <ChildBusComponent />
  </div>
</template>

<script>
import { EventBus } from '../hooks/bus'
import ChildBusComponent from './ChildBusComponent.vue'

export default {
  components: { ChildBusComponent },
  methods: {
    sendMessage() {
      EventBus.emit('message', 'Hello from Parent')
    }
  }
}
</script>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4f8;
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 10px;
  width: 400px;
  margin: 20px auto;
}

h1 {
  font-size: 2rem;
  color: #42b983;
}

.btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #358a63;
}
</style>
