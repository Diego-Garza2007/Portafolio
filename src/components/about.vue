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
                <img src="../assets/Nvim.svg" alt="">
            </div>
        </div>
    </div>
    </section>
</template>

<style lang="scss">
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
    }
        &__text {
        font-size: 14px;
        color: white;
        width: 100%;
        margin: 0px 0px 50px 0px;
    }

    &__tecnologia {
        color: white;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
        margin: 0px 0px 45px 0px;
    }
    &__div-icon {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(auto, 1fr);
        gap: 25px;
        border-radius: 15px;
        background: linear-gradient(307deg, rgba(255, 255, 255, 0.40) 20.69%, rgba(32, 88, 200, 0.31) 43.53%, rgba(23, 51, 105, 0.22) 69.23%, rgba(0, 0, 0, 0.04) 91.44%);
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px); 
        padding: 25px;
        margin: 0px 0px 30px 0px;
    }
}
@media (min-width: 1124px) {
 .container-about {
    width: 950px;


&__title {
    font-size: 64px;
    margin: 0px 0px 100px 0px;
}

&__text {
    font-size: 18px;
    color: white;
    width: 620px;
    margin: 0px 0px 70px 0px;
}

&__tecnologia {
    color: white;
    font-size: 32px;
    margin: 0px 0px 45px 0px;
}

&__div-icon {
    display: flex;
    flex-direction: row;
    margin: 0px 0px 350px 0px;
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