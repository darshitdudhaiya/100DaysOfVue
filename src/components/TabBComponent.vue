<template>
  <div class="tab">
    <h2>Tab B</h2>
    <input v-model="inputB" placeholder="Enter something in Tab B" />
    <p>You typed: {{ inputB }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputB: ''  
    };
  }
};
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
