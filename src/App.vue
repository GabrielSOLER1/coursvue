<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="w-3/12 border-e">
    <NavBar />
  </div>

  <div class="w-9/12">
    <RouterView />
  </div>
</template>
