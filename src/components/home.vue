<script setup>
import "animate.css";

import { ref } from 'vue';

const mostrarModal = ref(false);

function cerrarModal() {
  mostrarModal.value = false;
}
</script>

<template>
  <div id="home"></div>
  <div class="container-home">
    <div class="container-home__Imgcontainer">
      <img
        src="../assets/test2q.png"
        class="container-home__img animate__animated animate__fadeInDown"
      />
      <div
        class="container-home__Imgbg animate__animated animate__fadeIn"
      ></div>
    </div>
    <div class="container-home__info">
      <h1 class="container-home__title animate__animated animate__fadeInDown">
        Diego Emilio Garza Gudino
      </h1>
      <h3 class="container-home__subtitle animate__animated animate__fadeIn">
        {{ $t("body.dev") }}
      </h3>
      <div class="container-home__info__flexbtn">
        <button
          class="container-home__button animate__animated animate__bounceIn"
          onclick="window.open('./CVDiegoGarza.pdf', '_blank')"
        >
          <p>{{ $t("body.descarga") }}</p>
          <font-awesome-icon icon="fa-solid fa-file" size="lg" />
        </button>
        <button
          class="container-home__buttonGold animate__animated animate__bounceIn"
                @click="mostrarModal = true"
        >
          <p>{{ $t("body.certificados") }}</p>
          <font-awesome-icon icon="fa-solid fa-award" size="xl"/>
        </button>

         <!-- Modal con animaciones -->
    <transition name="fade">
      <div v-if="mostrarModal" class="modal" @click.self="cerrarModal">
        <transition name="zoom">
          <div class="modal__contenido animate__animated animate__zoomIn">
            <span class="modal__cerrar" @click="cerrarModal">&times;</span>
            <h2>✨ Certificados ✨</h2>
              <div class="galeria-certificados">
              <img src="/certificates/c1.png" alt="Certificado 1" class="img-certificado" />
              <img src="/certificates/c2.png" alt="Certificado 2" class="img-certificado" />
              <img src="/certificates/c3.png" alt="Certificado 3" class="img-certificado" />
              </div>
          </div>
        </transition>
      </div>
    </transition>

      </div>
    </div>
  </div>

  <img src="../assets/Wave.svg" class="wave" id="about" />
</template>

<style lang="scss">
@import "../Scss/_Variables.scss";
// Modal
/* Fondo semitransparente */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Contenido del modal */
.modal__contenido {
  background-color: rgb(241, 241, 241);
  padding: 30px;
  border-radius: 15px;
  min-width: 600px;
  max-width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

/* Botón de cerrar */
.modal__cerrar {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  font-size: 24px;
}

/* Animaciones personalizadas */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.4s ease;
}
.zoom-enter-from, .zoom-leave-to {
  transform: scale(0.7);
}
.galeria-certificados {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
}
.img-certificado {
  width: 240px;
  cursor: pointer;
  transition: transform 0.3s;
}
.img-certificado:hover {
  transform: scale(2);
  z-index: 10;
}





.container-home {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 150px auto 215px auto;
  align-items: center;

  &__Imgcontainer {
    position: relative;
    
  }
  &__Imgbg {
    position: absolute;
    width: 375px;
    height: 230px;
    background-color: $Secundary4-color;
    top: 0;
    left: 0;

    z-index: -1;
    transform: translate(-30px, -30px);
    border-radius: 15px;
  }

  &__img {
    width: 320px;
    height: 320px;
    border-radius: 100%;
    object-fit: cover; 
    object-position: top; 
    
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__flexbtn {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 400;
    text-align: center;

    animation-duration: 2s;
  }

  &__subtitle {
    color: $Secundary-color;
    margin: 5px 0px 20px 0px;
    text-align: center;

    animation-duration: 4s;
  }

  &__button {
    width: 9rem;
    height: 3rem;
    border: none;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: $Primary-color;
    margin: 0px auto 0px auto;
    p {
      font-size: 1rem;
      margin: 0px 10px 0px 0px;
    }

    &:hover {
      cursor: pointer;
      background-color: $Secundary-color;
    }
  }
  &__buttonGold {
      width: 9rem;
      height: 3rem;
      border: none;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: #FFC618;
      margin: 0px 0px 0px 0px;
      box-shadow: 0px 1px 10px 8px rgba(255,198,24,0.25);

      p {
      font-size: 1rem;
      margin: 0px 10px 0px 0px;
    }

    &:hover {
      cursor: pointer;
      background-color: #ffd452;
    }
    }
}
@media (min-width: 1024px) {
  .container-home {
    flex-direction: row;
    width: 950px;
    margin: 150px auto 215px auto;
    justify-content: space-around;

    &__Imgbg {
      position: absolute;
      width: 300px;
      height: 350px;
      background-color: $Secundary4-color;
      top: 0;
      left: -100;
      z-index: -1;
      transform: translate(-30px, -30px);
    }

    &__img {
      width: 420px;
      height: 420px;
    }

    &__title {
      font-size: 36px;
      font-weight: 400;
    }

    &__subtitle {
      color: $Secundary-color;
      margin: 15px 0px 30px 0px;
      text-align: start;
    }

    &__button {
      width: 9rem;
      height: 3rem;
      border: none;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: $Primary-color;
      margin: 0px 0px 0px 0px;
    }

    &__info {
        &__flexbtn {
        flex-direction: row;
        
    }
    }

  }
}
</style>
