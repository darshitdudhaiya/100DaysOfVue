<template>
  <div id="app">
    <h1>Async Component Example</h1>
    <async-component />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ErrorFallback from './components/ErrorFallback.vue'

export default {
  name: 'AsyncComponent',
  components: {
    AsyncComponent: defineAsyncComponent({
      loader: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import('./components/AsyncLoadedComponent.vue'))
          }, 2000)
        }),
      loadingComponent: LoadingSpinner,
      errorComponent: ErrorFallback,
      delay: 200,
      timeout: 5000
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
