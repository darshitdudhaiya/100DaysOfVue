<template>
  <div class="counter-container">
    <h1 class="count-display">Count: {{ count }}</h1>
    <div class="button-container">
      <button @click="increment" class="btn increment">Increment</button>
      <button @click="decrement" class="btn decrement">Decrement</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getCount']), // Access getter
    count() {
      return this.getCount // Bind count to computed property
    }
  },
  methods: {
    ...mapActions(['increment', 'decrement']) // Bind actions
  }
}
</script>

<style scoped>
.counter-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #42b983;
  border-radius: 8px;
  background-color: #f0f9ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.count-display {
  font-size: 2em;
  color: #42b983;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.btn {
  flex: 1;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.increment {
  background-color: #42b983;
}

.increment:hover {
  background-color: #358a63;
}

.decrement {
  background-color: #e74c3c;
}

.decrement:hover {
  background-color: #c0392b;
}
</style>
