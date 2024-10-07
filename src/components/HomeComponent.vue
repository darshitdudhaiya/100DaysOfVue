<template>
  <div class="container">
    <h1 :class="dynamicClass">Dynamic Classes in Vue</h1>
    <button class="toggle-button" @click="toggleClass">Toggle Class</button>

    <div :style="dynamicStyle" class="box">Dynamic Style Box</div>
    <button class="increase-button" @click="increaseSize">Increase Size</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      size: 100
    }
  },
  computed: {
    dynamicClass() {
      return {
        active: this.isActive,
        inactive: !this.isActive
      }
    },
    dynamicStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundColor: this.size > 150 ? 'lightgreen' : 'lightcoral'
      }
    }
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive
    },
    increaseSize() {
      this.size += 20
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin: 20px;
}

h2 {
  margin: 20px 0;
}

.active {
  color: green;
  font-weight: bold;
}

.inactive {
  color: red;
  font-weight: bold;
}

.box {
  margin-top: 10px;
  transition: all 0.3s ease;
}

.toggle-button, .increase-button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.toggle-button {
  background-color: #42b983;
  color: white;
}

.increase-button {
  background-color: #3498db;
  color: white;
}
</style>
