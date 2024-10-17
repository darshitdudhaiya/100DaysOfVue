<template>
  <div id="app">
    <parent-bus-component />
  </div>
</template>

<script>
import ParentBusComponent from './components/ParentBusComponent.vue'

export default {
  name: 'App',
  components: { ParentBusComponent }
}
</script>
