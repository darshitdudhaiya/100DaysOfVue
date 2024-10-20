<template>
  <div class="error">
    <p>❌ Oops! Something went wrong while loading the component.</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorFallback'
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 1.5em;
  margin-top: 20px;
}
</style>
