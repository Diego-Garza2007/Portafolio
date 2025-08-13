<script setup>
import Contact from "../components/contact.vue";
import Footer from "../components/footer.vue";
import { ref } from 'vue'
import Card from "../components/Card.vue"

const cards = ref([
  {
    imageSrc: '/Cards/proyects/EmailApp.svg',
    titleKey: 'Card.FirstApp',
    link: 'https://diego-garza2007.github.io/Front-mentor-Junior1/',
    techImages: [
      '/Cards/Icons/HtmlC.svg',
      '/Cards/Icons/CssC.svg',
      '/Cards/Icons/JSC.svg'
    ],
    loaded: false
  },
  {
    imageSrc: '/Cards/proyects/AgeApp.svg',
    titleKey: 'Card.SecondApp',
    link: 'https://diego-garza2007.github.io/Front-mentor-Junior2/',
    techImages: [
      '/Cards/Icons/HtmlC.svg',
      '/Cards/Icons/CssC.svg',
      '/Cards/Icons/JSC.svg'
    ],
    loaded: false
  },
  {
    imageSrc: '/Cards/proyects/Bebidas.svg',
    titleKey: 'Card.ThirdApp',
    link: 'https://bebidas-api-vue.netlify.app',
    techImages: [
      '/Cards/Icons/TailwindC.svg',
      '/Cards/Icons/VueC.svg'
    ],
    loaded: false
  },
  {
    imageSrc: '/Cards/proyects/Eiaostagram.svg',
    titleKey: 'Card.fourthApp',
    link: '#',
    techImages: [],
    loaded: false
  },
  {
    imageSrc: '/Cards/proyects/Calculadora.svg',
    titleKey: 'Card.fifthApp',
    link: 'https://diego-garza2007.github.io/CalculatorApp/',
    techImages: [
      '/Cards/Icons/HtmlC.svg',
      '/Cards/Icons/SassC.png',
      '/Cards/Icons/JSC.svg'
    ],
    loaded: false
  },
  {
    imageSrc: '/Cards/proyects/VuefireEcomm.svg',
    titleKey: 'Card.SixthApp',
    link: 'https://pos-vue-firebase-eta.vercel.app/',
    techImages: [
      '/Cards/Icons/FirebaseC.svg',
      '/Cards/Icons/TailwindC.svg',
      '/Cards/Icons/VueC.svg'
    ],
    loaded: false
  },
  {
    imageSrc: '/Cards/proyects/FinMty.svg',
    titleKey: 'Card.EightApp',
    link: 'https://fin-mty.vercel.app/',
    techImages: [
      '/Cards/Icons/VueC.svg',
      '/Cards/Icons/nodejs.svg',
      '/Cards/Icons/express.svg',
      '/Cards/Icons/mongodb.svg'
    ],
    loaded: false
  }
])
</script>

<template>
  <h1 class="title-proyect">
    <a>{{ $t("body.proyectos") }}</a>
  </h1>

  <section class="proyectos-section">
    <div class="container-proyectos">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :imageSrc="card.imageSrc"
        :titleKey="card.titleKey"
        :link="card.link"
        :techImages="card.techImages"
        v-show="card.loaded"
        :class="{ 'animate__animated animate__fadeIn': card.loaded }"
        @loaded="card.loaded = true"
          :style="card.loaded ? `animation-delay: ${index * 200}ms` : ''"
      />
    </div>
  </section>

  <Contact />
  <Footer />
</template>


<style lang="scss">
@import "../Scss/_Variables.scss";

// Título animado
.title-proyect {
  text-align: center;
  font-size: 48px;
  margin: 100px 0 0 0;

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

// Contenedor principal de las Cards
.container-proyectos {
  width: 340px;
  margin: 30px auto 20px auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  &__MainImage {
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
  }

  &__Card {
    height: 405px;
    width: 100%; // Asegura que la Card siempre respete el ancho del grid
    max-width: 320px;
    border-radius: 15px;
    background: linear-gradient(
      314deg,
      rgba(48, 104, 216, 0.4) 10.15%,
      rgba(32, 88, 200, 0.31) 36.45%,
      rgba(23, 51, 105, 0.22) 66.07%,
      rgba(0, 0, 0, 0.04) 91.64%
    );
    backdrop-filter: blur(20px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    &__FlexImg {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 50%;
      margin: 100px auto 0 auto;

      img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    &__contenido {
      padding: 20px;

      a {
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      font-size: 24px;
      font-weight: 400;
      margin: 0 0 50px 0;
    }
  }
}
// Responsive para tablets y desktops
@media (min-width: 1070px) {
  .container-proyectos {
    width: 960px;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

@media (min-width: 1600px) {
  .title-proyect {
    font-size: 64px;
  }

  .container-proyectos {
    width: 1300px;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}
</style>
