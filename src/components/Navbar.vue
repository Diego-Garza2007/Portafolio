<script setup>
  import { useDark, useToggle} from '@vueuse/core'
  import LanguageSwicht from './LanguageSwicht.vue';
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  import { RouterLink } from 'vue-router'
  import Tr from "@/i18n/translation"


  function AbrirNav() {
    const mobile = document.querySelector('#mobile_select')
    mobile.classList.toggle('nav__mobile')
    mobile.classList.toggle('None')
  }

  function scrollToContact() {
      const contactoElement = document.getElementById('contacto');
        if (contactoElement) {
          contactoElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


</script>

<template>
      <nav class="nav">
    <div id="mobile_select" class="None nav__desktop">
      <div class="nav__mobileflex">
    <ul>
      <li class="nav__enlace"><RouterLink :to="Tr.i18nRoute({ name: 'home' })" >Inicio</RouterLink></li>
      <li class="nav__enlace"><RouterLink :to="Tr.i18nRoute({ name: 'proyectos' })">{{ $t("nav.proyectos") }}</RouterLink></li>
      <button class="nav__Contact nav__mod" @click="scrollToContact">Contactame</button>
    </ul>

    
    <div class="nav__line"></div>

      <div class="nav__divIcons">
        
           <LanguageSwicht />
        
          <button class="nav__button Imoon" @click="toggleDark()" >
            <font-awesome-icon v-if="isDark === false" icon="fa-solid fa-moon" class="fa-2xl" />
           
            <font-awesome-icon v-else icon="fa-solid fa-sun" class="fa-2xl"/>
          </button>
          </div>
    </div>
  </div>
            <div class="nav__iconnav" @click="AbrirNav">
                    <font-awesome-icon :icon="['fas', 'bars']" class="fa-2xl"/>
            </div>
            
    </nav>
</template>