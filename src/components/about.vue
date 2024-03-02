<template>
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
</template>