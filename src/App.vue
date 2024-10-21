<template>
  <div class="app-container">
    <h1>Vue KeepAlive Example</h1>
    <div class="tabs">
      <button @click="currentTab = 'TabA'">Tab A</button>
      <button @click="currentTab = 'TabB'">Tab B</button>
    </div>

    <keep-alive>
      <component :is="currentTab" />
    </keep-alive>
  </div>
</template>

<script>
import TabA from './components/TabAComponent.vue'
import TabB from './components/TabBComponent.vue'

export default {
  data() {
    return {
      currentTab: 'TabA'  
    };
  },
  components: {
    TabA,
    TabB
  }
};
</script>

<style scoped>
.app-container {
  text-align: center;
  padding: 20px;
}
.tabs {
  margin-bottom: 20px;
}
button {
  margin: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #358a63;
}
</style>
