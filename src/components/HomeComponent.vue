<template>
  <div>
    <h1>Home Component</h1>
    <input type="email" v-model="email" placeholder="enter email" />
    <br /><br />
    <input type="password" v-model="password" placeholder="enter password" />
    <br /><br />
    <button type="button" @click="getValues">Get Values</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    getValues() {
      console.warn('Fuctions Called', this.email, this.password)
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
