<template>
  <div class="container">
    <h1>Parent Component</h1>
    <ChildEmitComponent @alert-parent="handleAlert" />
  </div>
</template>

<script>
import ChildEmitComponent from './ChildEmitComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildEmitComponent
  },
  methods: {
    handleAlert(message) {
      alert(message)
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 100px;
  text-align: center;
}
</style>
