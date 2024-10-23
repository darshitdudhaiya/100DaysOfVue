<template>
  <div>
    <h1>Suspense Example</h1>
    <Suspense>
      <!-- Default Slot: Async component to load -->
      <template #default>
        <AsyncComponent />
      </template>

      <!-- Fallback Slot: Displayed while waiting for async component -->
      <template #fallback>
        <div class="loading">⏳ Loading component...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

// Define the async component with dynamic import
const AsyncComponent = defineAsyncComponent(() => import('./AsyncLoadedComponent.vue'))

export default {
  components: {
    AsyncComponent
  }
}
</script>

<style scoped>
.loading {
  font-size: 1.5rem;
  color: #42b983;
  text-align: center;
  margin-top: 20px;
  animation: pulse 1s infinite;
}

/* Optional styling for animation */
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
