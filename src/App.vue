<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Header from './layouts/Header.vue';
import { onMounted } from 'vue';
const route = useRoute()
// onMounted(() => {
//   console.log(route.name);
// })

</script>

<template>
  <!-- <div v-if="route.path !== '/signup' || route.path !== '/login'"> -->
  <!-- <div v-if="route.name !== 'signup' || route.name !== 'login'"> -->
    <Header />
  <!-- </div> -->
  <RouterView />
</template>

<style scoped>

</style>
