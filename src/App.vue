<template>
  <div class="container">
    <button @click="updateAndFocus" class="update-button">Update & Focus</button>
    <input ref="inputElement" v-model="message" class="input-field" placeholder="Focus will jump here" />
    <p class="message-display">Message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    updateAndFocus() {
      this.message = 'Hello, Vue!';
      this.$nextTick(() => {
        this.$refs.inputElement.focus();
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7fafc;
  font-family: Arial, sans-serif;
}

.update-button {
  margin-bottom: 15px;
  padding: 8px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.update-button:hover {
  background-color: #358a63;
}

.input-field {
  padding: 12px;
  font-size: 1.1em;
  width: 80%;
  max-width: 300px;
  border: 2px solid #42b983;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #358a63;
}

.message-display {
  margin-top: 15px;
  font-size: 1.1em;
  color: #333;
}
</style>
  