<template>
  <div>
    <h1>{{ message }}</h1>
    <img v-bind:src="imageUrl" />
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data() {
    return {
      message: 'Data-binding Component',
      imageUrl: 'https://play.vuejs.org/logo.svg'
    }
  },

}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
