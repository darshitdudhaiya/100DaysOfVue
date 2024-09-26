<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  data() {
    return {
      message: 'My First Component In Vue.js!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>