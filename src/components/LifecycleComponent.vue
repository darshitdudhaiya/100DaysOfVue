<template>
  <div class="container">
    <h1>Vue.js Lifecycle Hooks</h1>
    <p>Check the console to see lifecycle logs.</p>
  </div>
</template>

<script>
export default {
  name: 'LifecycleComponent',

  data() {
    return {
      message: 'Learning Vue.js lifecycle hooks!'
    }
  },

  created() {
    console.log('Component Created: Data is initialized')
  },

  mounted() {
    console.log('Component Mounted: Now part of the DOM')
  },

  destroyed() {
    console.log('Component Destroyed: Cleanup done')
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3rem;
  color: #42b983;
}

p {
  font-size: 2rem;
  color: #ffffff;
}
</style>
