<template>
  <div class="container">
    <h1>Home Component</h1>
  </div>
  <div class="container">
    <ChildComponent :user="user" :details="details" :getData="getData"></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  name: 'HomeComponent',
  components: {
    ChildComponent
  },
  data() {
    return {
      user: 'Darhit Dudhaiya',
      details: {
        name: 'Darhit Dudhaiya',
        email: 'darhitdudhaiya201@gmail.com'
      }
    }
  },

  methods: {
    getData(){
      alert('Fuction Called');
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
