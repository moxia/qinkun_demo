<template>
  <div id="app">
    <div class="sub-app">
      <h1>子应用1</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sub-app {
  padding: 20px;
  background-color: #e6f7ff;
  border-radius: 4px;
}
</style>
