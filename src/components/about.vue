<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);
const container = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect(); // Solo una vez, quítalo si quieres que se repita
      }
    },
    { threshold: 0.2 }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>

<template>
  <section class="bg" ref="container">
<div class="container-about">

      <!-- Aquí podría ir tu wave o elementos decorativos que ya se ven -->
      <div class="about-wave"> <!-- Ejemplo, depende de tu estructura --> </div>

      <!-- Colocamos un disparador justo antes del texto -->
      <div ref="trigger" style="height: 1px;"></div>

      <div>
        <h1 
          class="container-about__title animate__animated"
          :class="{ 'animate__fadeInLeft': isVisible }"
        >
          <a>{{ $t("nav.sobre") }}</a>
        </h1>

<div class="container-about__description animate__animated" :class="{ 'animate__fadeInRight': isVisible }">
  <p class="container-about__text">{{ $t('body.descripcion_1') }}</p>
  <p class="container-about__text">{{ $t('body.descripcion_2') }}</p>
  <p class="container-about__text">{{ $t('body.descripcion_3') }}</p>
  <p class="container-about__text">{{ $t('body.descripcion_4') }}</p>
  <p class="container-about__text">{{ $t('body.descripcion_5') }}</p>
</div>

      </div>

      <div>
        <h1 
          class="container-about__tecnologia animate__animated"
          :class="{ 'animate__fadeInUp': isVisible }"
        >
          {{ $t("body.tecnologia") }}
        </h1>
      </div>

    </div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide"><img src="/logos/HTML.svg" /></div>
        <div class="slide"><img src="/logos/CSS.svg" /></div>
        <div class="slide"><img src="/logos/JS.svg" /></div>
        <div class="slide"><img src="/logos/Git.svg" /></div>
        <div class="slide"><img src="/logos/Github.svg" /></div>
        <div class="slide"><img src="/logos/Figma.svg" /></div>
        <div class="slide"><img src="/logos/Linux.svg" /></div>
        <div class="slide"><img src="/logos/Laravel.svg" /></div>
        <div class="slide"><img src="/logos/Python.svg" /></div>
        <div class="slide"><img src="/logos/Bash.svg" /></div>
        <div class="slide"><img src="/logos/Docker.svg" /></div>
        <div class="slide"><img src="/logos/Sass.svg" /></div>
        <div class="slide"><img src="/logos/Typescrip.svg" /></div>
        <div class="slide"><img src="/logos/Vue.svg" /></div>

        <!-- Duplicados para que se vea continuo -->
        <div class="slide"><img src="/logos/HTML.svg" /></div>
        <div class="slide"><img src="/logos/CSS.svg" /></div>
        <div class="slide"><img src="/logos/JS.svg" /></div>
        <div class="slide"><img src="/logos/Git.svg" /></div>
        <div class="slide"><img src="/logos/Github.svg" /></div>
        <div class="slide"><img src="/logos/Figma.svg" /></div>
        <div class="slide"><img src="/logos/Linux.svg" /></div>
        <div class="slide"><img src="/logos/Laravel.svg" /></div>
        <div class="slide"><img src="/logos/Python.svg" /></div>
        <div class="slide"><img src="/logos/Bash.svg" /></div>
        <div class="slide"><img src="/logos/Docker.svg" /></div>
        <div class="slide"><img src="/logos/Sass.svg" /></div>
        <div class="slide"><img src="/logos/Typescrip.svg" /></div>
        <div class="slide"><img src="/logos/Vue.svg" /></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../Scss/_Variables.scss";
.container-about {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: -3px auto 0px auto;
  align-items: center;
  justify-content: center;

  &__title {
    text-align: center;
    font-size: 48px;
    margin: 0px 0px 50px 0px;
    color: white;
    a {
      animation: fluido 5s ease-in-out infinite;
      background: linear-gradient(-45deg, #553aec, #943ce7, #23a6d5, #23d5ab);
      background-size: 300%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @keyframes fluido {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }
  &__text {
    font-size: 14px;
    color: white;
    width: 100%;
    line-height: 1.6;
    margin: 0px 0px 30px 0px;
    font-weight: 400;
  }

  &__description {
    margin-bottom: 2rem;
    padding: 20px;
background: rgba(224, 224, 224, 0.13);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(3.1px);
border: 1px solid rgba(224, 224, 224, 0.3);
  }

  &__tecnologia {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin: 0px 0px 45px 0px;
  }
}
.div-icon {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    307deg,
    rgba(255, 255, 255, 0.4) 20.69%,
    rgba(32, 88, 200, 0.31) 43.53%,
    rgba(23, 51, 105, 0.22) 69.23%,
    rgba(0, 0, 0, 0.04) 91.44%
  );
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  padding: 25px;
  margin: 0px 0px 0px 0px;

  img {
    margin: 0px 80px 0px 0px;
  }
}
@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgb(36, 63, 184) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

$animationSpeed: 30s;

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.slider {
  background: $Primary-color;
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 2;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    display: flex;
    width: calc(250px * 14 * 2); // 14 logos * 2 porque duplicaste
    animation: scroll $animationSpeed linear infinite;
  }

  .slide {
    height: 100px;
    width: 250px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: auto;
      width: 100%;
      max-height: 100px;
      object-fit: contain;
    }
  }
}

@media (min-width: 1124px) {
  .container-about {
    width: 950px;

    &__title {
      font-size: 64px;
      margin: 0px 0px 50px 0px;
    }

    &__text {
      font-size: 18px;
      color: white;
      width: 620px;
    }

    &__tecnologia {
      color: white;
      font-size: 32px;
      margin: 0px 0px 45px 0px;
    }

    &__div-icon {
      display: flex;
      flex-direction: row;
      margin: 0px 0px 50px 0px;
      width: 1232px;
      height: 150px;
      gap: 0px;
      padding: 0px;
      border-radius: 15px;

      img {
        width: 100%;
        margin: 40px 0px 0px 0px;
        height: 40%;
        justify-content: space-around;
      }
    }
  }
}
</style>
