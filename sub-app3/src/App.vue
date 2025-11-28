<template>
  <div class="app">
    <h1>sub-app3 (Vue 3)</h1>
    <router-link to="/">首页</router-link>
    <router-link to="/about" style="margin-left:12px;">关于</router-link>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
  .app { padding: 16px; font-family: Arial, Helvetica, sans-serif; }
</style>

