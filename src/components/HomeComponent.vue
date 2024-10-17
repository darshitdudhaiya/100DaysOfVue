<template>
  <div class="container">
    <input type="text" v-focus class="styled-input" placeholder="Auto-focused input" />
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus()  
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
}

.styled-input {
  padding: 10px 15px;
  font-size: 1.2rem;
  border: 2px solid #42b983;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.styled-input:focus {
  border-color: #358a63;
}
</style>
