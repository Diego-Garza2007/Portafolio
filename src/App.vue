<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
<!--   <p>{{ $t("body.textobody") }}</p> -->
  <RouterView />
</template>

