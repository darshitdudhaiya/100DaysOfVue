<template>
  <div class="component-container">
    <h1>{{ mixinData }}</h1>
    <button @click="mixinMethod" class="mixin-button">Call Mixin Method</button>
  </div>
</template>

<script>
import { myMixin } from './components/mixin';

export default {
  mixins: [myMixin]
}
</script>

<style scoped>
.component-container {
  padding: 20px;
  background-color: #f0f9ff;
  border: 2px solid #42b983;
  border-radius: 8px;
  text-align: center;
}

.mixin-button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.mixin-button:hover {
  background-color: #358a63;
}
</style>