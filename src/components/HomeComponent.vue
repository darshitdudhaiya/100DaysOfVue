<template>
  <div class="main-container">
    <h1>Cart Total: {{ totalPrice }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Apple', price: 2 },
        { name: 'Banana', price: 1 }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.items.reduce((sum, item) => sum + item.price, 0)
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

.main-container {
  display: flex;
  justify-content: center;
  min-height: 80vh;
  align-items: center;
}
</style>
