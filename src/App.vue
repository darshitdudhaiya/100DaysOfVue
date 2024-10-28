<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: { HomeComponent }
}
</script>
