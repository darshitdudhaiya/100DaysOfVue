<template>
  <div class="main">
    <h1>Get Values From Check Box And Radio Buttons ...</h1>
    <div class="input-container">
      <h1>Technology</h1>
      <div class="input-section">
        <label for="PHP">PHP</label>
        <input type="checkbox" value="PHP" v-model="technology" id="PHP" />
        <label for="Wordpress">Wordpress</label>
        <input type="checkbox" value="Wordpress" v-model="technology" id="Wordpress" />
        <label for="Laravel">Laravel</label>
        <input type="checkbox" value="Laravel" v-model="technology" id="Laravel" />
        <h2>
          {{ technology }}
        </h2>
      </div>
      <h1>Profession</h1>
      <div class="input-section">
        <label for="Student">Student</label>
        <input type="radio" v-model="profession" value="Student" id="Student" />
        <label for="Developer">Developer</label>
        <input type="radio" v-model="profession" value="Developer" id="Developer" />
        <h2>
          {{ profession }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technology: [],
      profession: null
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

h2 {
  color: chartreuse;
}

.main {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.input-container {
  margin: 0px 20px;
  align-items: center;
  font-size: large;
}

.input-section {
  display: flex;
  gap: 10px;
}
</style>
