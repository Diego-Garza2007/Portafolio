<script>
import 'animate.css';
</script>

<template>
    <div id="home"></div>
    <div class="container-home" >
        <div class="container-home__Imgcontainer">
        <img src="../assets/Foto-diego.png" class="container-home__img animate__animated animate__fadeInDown">
        <div class="container-home__Imgbg animate__animated animate__fadeIn"></div>
    </div>
    <div class="container-home__info">
        <h1 class="container-home__title animate__animated animate__fadeInDown">Diego Emilio Garza Gudino</h1>
        <h3 class="container-home__subtitle animate__animated animate__fadeIn ">{{ $t("body.dev") }}</h3>
        <button class="container-home__button animate__animated animate__bounceIn "><p>{{ $t("body.descarga") }}</p> <font-awesome-icon icon="fa-solid fa-file" size="lg" /></button>
    </div>
    </div>

    <img src="../assets/Wave.svg" class="wave" id="about">
</template>

<style lang="scss">
@import '../Scss/_Variables.scss';

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

}
&__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

}
}

</style>