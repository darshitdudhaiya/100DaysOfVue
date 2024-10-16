<template>
  <div class="container">
    <h1>Parent Component</h1>
    <ChildComponent />
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildErrorHandleComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  errorCaptured(err, vm, info) {
    this.errorMessage = 'Error in child component!'
    console.error('Error:', err, info)
    return false // Stop further propagation
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
.container {
  text-align: center;
}
</style>
