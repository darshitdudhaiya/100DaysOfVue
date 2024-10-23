<template>
  <div class="app-container">
    <SuspenseCompomnent />
  </div>
</template>

<script>
import SuspenseCompomnent from './components/SuspenseComponent.vue'
export default {
  components: {
    SuspenseCompomnent
  }
}
</script>

<style scoped>
.app-container {
  text-align: center;
  padding: 20px;
}
</style>
