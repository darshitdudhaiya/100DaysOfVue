<template>
  <div class="app">
    <h1>Teleport Example</h1>
    <button @click="showModal = true" class="open-modal-btn">Open Modal</button>

    <teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click="showModal = false">
        <div class="modal-content" @click.stop>
          <h2 class="modal-header">This is a modal!</h2>
          <p class="modal-body">Here’s some content inside the modal. Click outside to close it.</p>
          <button @click="showModal = false" class="close-modal-btn">Close Modal</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>
.app {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.open-modal-btn {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.open-modal-btn:hover {
  background-color: #358a63;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;
}

.modal-header {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.modal-body {
  font-size: 1rem;
  margin-bottom: 20px;
}

.close-modal-btn {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-modal-btn:hover {
  background-color: #c0392b;
}
</style>
