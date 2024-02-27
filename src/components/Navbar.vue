<script setup>
 import { useDark, useToggle} from '@vueuse/core'
 import LanguageSwicht from './LanguageSwicht.vue';
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

</script>

<template>
      <nav class="nav">
    <img src="../assets/dev-removebg-preview 1.svg">
    <ul>
        <li class="nav__enlace"><a href="#home">{{ $t("nav.inicio") }}</a></li>
        <li class="nav__enlace"><a href="#about">{{ $t("nav.sobre") }}</a></li>
        <li class="nav__enlace"><a href="#projects">{{ $t("nav.proyectos") }}</a></li>
        <button class="nav__Contact nav__mod"><a href="#contacto">{{ $t("nav.contactame") }}</a></button> 

    </ul>

    
    <div class="nav__line"></div>

      <div class="nav__divIcons" >

           <LanguageSwicht />

          <button class="nav__button Imoon" @click="toggleDark()" >
            <font-awesome-icon v-if="isDark === false" icon="fa-solid fa-moon" class="fa-2xl" />
           
            <font-awesome-icon v-else icon="fa-solid fa-sun" class="fa-2xl"/>
          </button>
          
          <div class="nav__iconnav">
            <font-awesome-icon :icon="['fas', 'bars']" class="fa-2xl"/>
          </div>

      </div>
    </nav>
</template>