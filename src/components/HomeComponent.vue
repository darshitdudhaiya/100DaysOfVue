<template>
  <div>
    <h1 v-on:mouseover="textHovered()">Hover Me</h1>
    <input type="text" v-model="count" />
    <h1>Count: {{ count }}</h1>

    <br />
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
