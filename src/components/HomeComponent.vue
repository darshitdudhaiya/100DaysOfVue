<template>
  <div>
    <h1>Home Component</h1>
    <h1>Data {{ getData().email }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      email: 'darshitdudhaiya201@gmail.com'
    }
  },

  methods: {
    getName(name) {
      return name
    },

    getData() {
      return {
        name: 'Home Component',
        email: this.email
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
