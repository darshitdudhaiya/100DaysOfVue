<template>
  <div id="app">
    <transition-component />
  </div>
</template>

<script>
import TransitionComponent from './components/TransitionComponent.vue'

export default {
  name: 'App',
  components: {
    TransitionComponent
  }
}
</script>
