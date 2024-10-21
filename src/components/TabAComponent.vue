<template>
  <div class="tab">
    <h2>Tab A</h2>
    <input v-model="inputA" placeholder="Enter something in Tab A" />
    <p>You typed: {{ inputA }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputA: '' 
    }
  }
}
</script>

<style scoped>
.tab {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 5px;
}
input {
  padding: 5px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
