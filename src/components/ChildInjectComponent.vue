<template>
  <div class="child-container">
    <h3>Child Component</h3>
    <p>Injected Message: "{{ message }}"</p>
  </div>
</template>

<script>
export default {
  name: 'ChildInjectComponent',
  inject: ['message'] 
}
</script>

<style scoped>
.child-container {
  padding: 20px;
  background-color: #e9f5ee;
  border: 2px solid #358a63;
  border-radius: 8px;
  margin-top: 10px;
}
</style>
