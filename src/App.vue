<template>
  <div class="app-container">
    <TeleportComponent />
  </div>
</template>

<script>
import TeleportComponent from './components/TeleportComponent.vue'
export default {
  components: {
    TeleportComponent
  }
}
</script>

<style scoped>
.app-container {
  text-align: center;
  padding: 20px;
}
</style>
