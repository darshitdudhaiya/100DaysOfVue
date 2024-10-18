<template>
  <div class="parent-container">
    <h2>Parent Component</h2>
    <p>Providing Message: "{{ message }}"</p>

    <child-inject-component />
  </div>
</template>

<script>
import ChildInjectComponent from './ChildInjectComponent.vue'

export default {
  name: 'ParentProvideComponent',
  components: {
    ChildInjectComponent
  },
  provide() {
    return {
      message: '👋 Hello from Parent!'
    }
  },
  data() {
    return {
      message: '👋 Hello from Parent!'
    }
  }
}
</script>

<style scoped>
.parent-container {
  padding: 20px;
  background-color: #f0f9ff;
  border: 2px solid #42b983;
  border-radius: 8px;
}
</style>
