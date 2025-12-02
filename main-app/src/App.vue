<template>
  <div id="app">
    <div class="main-app">
      <h1>主应用</h1>
      <div class="nav">
        <router-link to="/">首页</router-link> |
        <router-link to="/sub-app1">子应用1</router-link> |
        <router-link to="/sub-app2">子应用2</router-link> |
        <router-link to="/sub-app3">子应用3</router-link> |
        <router-link to="/sub-app4">子应用4</router-link> |
        <router-link to="/sub-app5">子应用5(React)</router-link> |
        <router-link to="/sub-app6">子应用6(Angular)</router-link>
      </div>
      <!-- 主应用路由出口 -->
      <router-view></router-view>
    </div>
    <!-- 子应用挂载点 -->
    <div id="subapp-container"></div>
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
  margin-top: 20px;
}

.main-app {
  padding: 20px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  border-radius: 4px;
}

.nav {
  margin: 20px 0;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>



