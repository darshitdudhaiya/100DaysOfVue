<template>
  <div class="container">
    <h1>Main Component</h1>
    <CardComponent>
      <template #header>
        <h2>This is the header content passed from the parent.</h2>
      </template>
      <template #body>
        <p>This is the body content passed from the parent.</p>
      </template>
      <template #footer>
        <button @click="handleClick">Click Me!</button>
      </template>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardCompnent.vue'

export default {
  name: 'App',
  components: {
    CardComponent
  },
  methods: {
    handleClick() {
      alert('Button Clicked!')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
h1 {
  font-weight: 600;
  font-size: 2.5rem;
}
</style>
