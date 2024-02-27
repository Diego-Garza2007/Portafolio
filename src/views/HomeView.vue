<script setup>


</script>

<template>
    <div id="home"></div>
    <div class="container-home" >
        <div>
        <img src="../assets/Foto diego.png" class="container-home__img">
    </div>
    <div class="container-home__info">
        <h1 class="container-home__title">Diego Emilio Garza Gudino</h1>
        <h3 class="container-home__subtitle">{{ $t("body.dev") }}</h3>
        <button class="container-home__button"><p>{{ $t("body.descarga") }}</p> <font-awesome-icon icon="fa-solid fa-file" size="lg" /></button>
    </div>
    </div>

    <img src="../assets/Wave.svg" class="wave" id="about">

    <section class="bg">
    <div class="container-about" >


        <div>
            <h1 class="container-about__title">{{ $t("nav.sobre") }}</h1>
            <p class="container-about__text">{{ $t("body.descripcion") }}</p>
        </div>

        <div>
            <h1 class="container-about__tecnologia">{{ $t("body.tecnologia") }}</h1>
            <div class="container-about__div-icon">
                <img src="../assets/Html.svg" alt="">
                <img src="../assets/Css.svg" alt="">
                <img src="../assets/JS.svg" alt="">
                <img src="../assets/Figma.svg" alt="">
                <img src="../assets/Vscode.svg" alt="">
                <img src="../assets/Vue.svg" alt="">
                <img src="../assets/React.svg" alt="">
                <img src="../assets/Nvim.svg" alt="">
            </div>
        </div>
    </div>
    </section>

    <div class="container-proyectos" id="projects">
        <h1>{{ $t("body.proyectos") }}</h1>

        <div class="container-proyectos__Card">

            <img src="../assets/Ejemplo.png" alt="">
            <div class="container-proyectos__Card__contenido">
                <p>Aplicacion de correctos con funcionalidades y UI</p>
                <div>
                <img src="../assets/Html.svg" alt="">
                <img src="../assets/Css.svg" alt="">
                <img src="../assets/JS.svg" alt="">
                <img src="../assets/Vue.svg" alt="">
            </div>
            </div>
        </div>

        <div class="container-proyectos__Card">

<img src="../assets/Ejemplo.png" alt="">
<div class="container-proyectos__Card__contenido">
    <p>Aplicacion de correctos con funcionalidades y UI</p>
    <div>
    <img src="../assets/Html.svg" alt="">
    <img src="../assets/Css.svg" alt="">
    <img src="../assets/JS.svg" alt="">
    <img src="../assets/React.svg" alt="">
</div>
</div>
    </div>  
        
    </div>

    <section class="bg-gradient">
    <div class="container-contacto" id="contacto">
        <h1>{{ $t("body.contactame") }}</h1>

            <form
    action="https://formspree.io/f/mrgwkqje"
    method="POST"
    class="container-contacto__form"
    >
   
      
        <input type="email" name="email" class="container-contacto__email" placeholder="E-mail">
        <textarea name="message" v-bind:placeholder="$t('body.contactame')" class="container-contacto__desc"></textarea>
  
    <!-- your other form fields go here -->
    <button type="submit" class="container-contacto__submit">{{ $t('body.enviar') }}</button>
    </form>
    </div>
    </section>


</template>
