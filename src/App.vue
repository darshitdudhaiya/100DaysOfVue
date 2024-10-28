<template>
  <div id="app">
    <render-function-component :items="['Vue', 'React', 'Angular']" />
  </div>
</template>

<script>
import RenderFunctionComponent from './components/RenderFunctionComponent.vue'

export default {
  name: 'App',
  components: { RenderFunctionComponent }
}
</script>
