<template>
    <div class="container-proyectos__Card">
      <img :src="imageSrc" alt="Project Image" />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a :href="link" target="_blank">{{ $t(titleKey) }}</a>
        </p>
        <div class="container-proyectos__Card__FlexImg">
          <img v-for="(tech, index) in techImages" :key="index" :src="tech" alt="Technology Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true
    },
    titleKey: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    techImages: {
      type: Array,
      required: true
    }
  })
  </script>
  
