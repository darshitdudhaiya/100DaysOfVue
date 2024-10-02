<template>
  <div>
    <h1>Conditional Rendering</h1>
    <button @click="toggle">Toggle Visibility</button>
    <p v-if="isVisible">Visible with v-if</p>
    <p v-show="isVisible">Visible with v-show</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>


<style scoped>
h1 {
  color: #42b983;
}
</style>
