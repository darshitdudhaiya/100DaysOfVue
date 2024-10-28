<template>
  <div class="dashboard-container">
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard!</p>
    <button @click="logout" class="btn">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Perform logout logic here, then redirect to login page
      console.log('Logging out')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #42b983;
  border-radius: 8px;
  background-color: #e9f5ee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #358a63;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #358a63;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2b6f4b;
}
</style>
