<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script>
import authStore from '../store/authStore' 

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      authStore.isAuthenticated = true // Update your authentication state
      this.$router.push('/dashboard') 
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #42b983;
  border-radius: 10px;
  background-color: #f0f9ff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.login-container:hover {
  transform: translateY(-5px);
}

h2 {
  text-align: center;
  color: #42b983;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
  margin-right: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #42b983;
  outline: none;
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s;
}

.btn:hover {
  background-color: #358a63;
  transform: scale(1.02);
}

/* Responsive Design */
@media (max-width: 600px) {
  .login-container {
    padding: 20px;
  }

  h2 {
    font-size: 1.5em;
  }

  input {
    padding: 10px;
  }

  .btn {
    padding: 10px;
  }
}
</style>
