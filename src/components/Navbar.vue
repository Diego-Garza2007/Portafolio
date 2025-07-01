<script setup>
  import { useDark, useToggle} from '@vueuse/core'
  import LanguageSwicht from './LanguageSwicht.vue';
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  import { RouterLink } from 'vue-router'
  import Tr from "@/i18n/translation"


function AbrirNav() {
  const mobile = document.querySelector('#mobile_select')
  const isOpen = mobile.classList.contains('nav__mobile')

  if (!isOpen) {
    // Abrimos menú
    mobile.classList.add('nav__mobile')
    mobile.classList.remove('None')

    // Añadimos listener después de un pequeño delay para no capturar el click que abre
    setTimeout(() => {
      document.addEventListener('click', outsideClickListener)
    }, 100)
  } else {
    // Cerramos menú
    mobile.classList.remove('nav__mobile')
    mobile.classList.add('None')

    document.removeEventListener('click', outsideClickListener)
  }
}

function outsideClickListener(event) {
  const mobile = document.querySelector('#mobile_select')
  if (!mobile.contains(event.target)) {
    // Cerramos menú si se clickea fuera
    mobile.classList.remove('nav__mobile')
    mobile.classList.add('None')

    document.removeEventListener('click', outsideClickListener)
  }
}

  function scrollToContact() {
  const contactoElement = document.getElementById('contacto');
  const mobile = document.querySelector('#mobile_select')

  if (contactoElement) {
    contactoElement.scrollIntoView({ behavior: 'smooth' });
  }

  // Si el menú móvil está abierto, lo cerramos
  if (mobile && mobile.classList.contains('nav__mobile')) {
    mobile.classList.remove('nav__mobile');
    mobile.classList.add('None');
    document.removeEventListener('click', outsideClickListener);
  }
  }


</script>

<template>
      <nav class="nav">
    <div id="mobile_select" class="None nav__desktop">
      <div class="nav__mobileflex">
    <ul>
      <li class="nav__enlace"><RouterLink :to="Tr.i18nRoute({ name: 'home' })" >Inicio</RouterLink></li>
      <hr class="nav__hr">
      <li class="nav__enlace"><RouterLink :to="Tr.i18nRoute({ name: 'proyectos' })">{{ $t("nav.proyectos") }}</RouterLink></li>
      <hr class="nav__hr">
      <button class="nav__Contact nav__mod" @click="scrollToContact">{{ $t("nav.contactame") }}</button>
    </ul>

    
    <div class="nav__line"></div>

      <div class="nav__divIcons">
        
           <LanguageSwicht />
        
          <button class="nav__button Imoon" @click="toggleDark()" >
              <transition name="icon-fade" mode="out-in">
            <font-awesome-icon v-if="isDark === false" icon="fa-solid fa-moon" class="fa-2xl" key="moon" />
           
            <font-awesome-icon v-else icon="fa-solid fa-sun" class="fa-2xl" key="sun"/>
              </transition>

          </button>
          </div>
    </div>
  </div>
            <div class="nav__iconnav" @click="AbrirNav">
                    <font-awesome-icon :icon="['fas', 'bars']" class="fa-2xl"/>
            </div>
            
    </nav>
</template>

<style lang="scss">
.icon-fade-enter-active, .icon-fade-leave-active {
  transition: all 0.5s ease;
}

.icon-fade-enter-from, .icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(-15deg);
}

.icon-fade-enter-to, .icon-fade-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

</style>