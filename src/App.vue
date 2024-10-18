<template>
  <div id="app">
    <parent-provide-component />
  </div>
</template>

<script>
import ParentProvideComponent from './components/ParentProvideComponent.vue'

export default {
  name: 'App',
  components: { ParentProvideComponent }
}
</script>
