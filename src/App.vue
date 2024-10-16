<template>
  <div id="app">
    <parent-error-handle-component />
  </div>
</template>

<script>
import ParentErrorHandleComponent from './components/ParentErrorHandleComponent.vue';

export default {
    name: 'App',
    components: { ParentErrorHandleComponent }
}
</script>

<style>
nav {
  margin-bottom: 20px;
  gap: 10px;
  display: flex;
}
router-link {
  margin-right: 15px;
  text-decoration: none;
  color: #42b983;
}
</style>
