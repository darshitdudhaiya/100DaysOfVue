<template>
  <div class="watcher-example">
    <h2>Watcher Example</h2>
    <p>Enter your age:</p>
    <input v-model="age" type="number" />

    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 25,
      message: ''
    }
  },
  watch: {
    age(newAge) {
      if (newAge >= 18) {
        this.message = 'You are an adult.'
      } else {
        this.message = 'You are a minor.'
      }
    }
  }
}
</script>

<style scoped>
.watcher-example {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
}

input {
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

p {
  font-size: 18px;
  color: #42b983;
}
</style>
  