<template>
  <div class="main-container">
    <div>
      <h1>For Loops in Vue.js</h1>

      <br />

      <ul>
        <li v-for="item in technology" :key="item">{{ item }}</li>
      </ul>

      <br />
      <br />

      <ul>
        <li v-for="(item,index) in users" :key="index">
          {{ index + 1 }} Name : {{ item.name }} and Email is {{ item.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technology: ['PHP', 'Laravel', 'Wordpress', 'Javascript'],

      users: [
        { name: 'Darshit Dudhaiya', email: 'darshitdudhaiya201@gmail.com' },
        { name: 'Dren Fury', email: 'drenfury@gmail.com' },
        { name: 'Robert Downey Junior', email: 'robert@gmail.com' }
      ]
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

ul li {
  font-size: x-large;
}
</style>
