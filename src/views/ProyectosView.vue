<script setup>
import Contact from "../components/contact.vue";
import Footer from "../components/footer.vue";
</script>

<template>
  <h1 class="title-proyect">
    <a>{{ $t("body.proyectos") }}</a>
  </h1>

  <section class="container-proyectos" id="projects">
    <div class="container-proyectos__Card">
      <img
        src="/Cards/EmailApp.svg"
        alt=""
        class="container-proyectos__MainImage"
      />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a
            href="https://diego-garza2007.github.io/Front-mentor-Junior1/"
            target="_blank"
            >Validacion de formulario</a
          >
        </p>
        <div class="container-proyectos__Card__FlexImg">
          <img src="/Cards/HtmlC.svg" alt="" />
          <img src="/Cards/CssC.svg" alt="" />
          <img src="/Cards/JSC.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="container-proyectos__Card">
      <img src="/Cards/AgeApp.svg" alt="" />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a
            href="https://diego-garza2007.github.io/Front-mentor-Junior2/"
            target="_blank"
            >Calculadora de edad</a
          >
        </p>
        <div class="container-proyectos__Card__FlexImg">
          <img src="/Cards/HtmlC.svg" alt="" />
          <img src="/Cards/CssC.svg" alt="" />
          <img src="/Cards/JSC.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="container-proyectos__Card">
      <img src="/Cards/Bebidas.svg" alt="" />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a
            href="https://diego-garza2007.github.io/Front-mentor-Junior2/"
            target="_blank"
            >Api de Bebidas</a
          >
        </p>
        <div class="container-proyectos__Card__FlexImg">
          <img src="/Cards/HtmlC.svg" alt="" />
          <img src="/Cards/CssC.svg" alt="" />
          <img src="/Cards/JSC.svg" alt="" />
          <img src="/Cards/VueC.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="container-proyectos__Card">
      <img src="/Cards/Eiaostagram.svg" alt="" />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a
            href="https://diego-garza2007.github.io/Front-mentor-Junior2/"
            target="_blank"
            >Red Social Eiaostagram</a
          >
        </p>
        <div class="container-proyectos__Card__FlexImg">
          <img src="/Cards/LaravelC.svg" alt="" />
          <img src="/Cards/dockerC.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="container-proyectos__Card">
      <img src="/Cards/Calculadora.svg" alt="" />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a
            href="https://diego-garza2007.github.io/Front-mentor-Junior2/"
            target="_blank"
            >Calculadora Matematica</a
          >
        </p>
        <div class="container-proyectos__Card__FlexImg">
          <img src="/Cards/HtmlC.svg" alt="" />
          <img src="/Cards/CssC.svg" alt="" />
          <img src="/Cards/JSC.svg" alt="" />
          <img src="/Cards/VueC.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="container-proyectos__Card">
      <img src="/Cards/FreshCoffe.svg" alt="" />
      <div class="container-proyectos__Card__contenido">
        <p>
          <a
            href="https://diego-garza2007.github.io/Front-mentor-Junior2/"
            target="_blank"
            >App de comida</a
          >
        </p>
        <div class="container-proyectos__Card__FlexImg">
            <img src="/Cards/LaravelC.svg" alt="" />
             <img src="/Cards/dockerC.svg" alt="" />
             <!-- Aca va react -->
        </div>
      </div>
    </div>
  </section>

  <Contact />
  <Footer />
</template>

<style lang="scss">
@import "../Scss/_Variables.scss";

.title-proyect {
  text-align: left;
  font-size: 48px;
  text-align: center;
  margin: 100px 0px 50px 0px;

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

.container-proyectos {
  width: 340;
  margin: 0px auto 30px auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: auto;
  gap: 20px;

  &__MainImage {
    border-radius: 15px 15px 0px 0px;
  }

  &__Card {
    height: 405px;
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
    margin: 0px auto 0px auto;
    display: flex;
    flex-direction: column;

    &__FlexImg {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        margin: 100px auto 0px auto;
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
      margin: 0px 0px 50px 0px;
    }
  }
}

@media (min-width: 1070px) {
  .container-proyectos {
    width: 960px;
    margin: 70px auto 0px auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 30px;
    height: 120vh;
  }
}

@media (min-width: 1600px) {
  .title-proyect {
    font-size: 64px;
  }
  .container-proyectos {
    width: 1300px;
    margin: 70px auto 0px auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 30px;
    height: 100vh;
  }
}
</style>
