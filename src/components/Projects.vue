<template>
    <div class="container-proyectos" id="projects">
        <h1>{{ $t("body.proyectos") }}</h1>

        <div class="container-proyectos__Card">

            <img src="../assets/proyectgit.png" alt="" class="container-proyectos__MainImage">
            <div class="container-proyectos__Card__contenido">
                <p><a href="https://diego-garza2007.github.io/Front-mentor-Junior1/" target="_blank">Aplicacion de correctos con funcionalidades y UI</a></p>
                <div>
                <img src="../assets/Html.svg" alt="">
                <img src="../assets/Css.svg" alt="">
                <img src="../assets/JS.svg" alt="">
            </div>
            </div>
        </div>

<!--         <div class="container-proyectos__Card">

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
-->
    </div> 
</template>

<style lang="scss">
@import '../Scss/_Variables.scss';
.container-proyectos {
    width: 50%;
    margin: 50px auto 0px auto;

    h1 {
        text-align: center;
        font-size: 48px;
        color: $Secundary-color;
        margin: 0px 0px 100px 0px;
    }

    &__MainImage {
            border-radius: 15px 15px 0px 0px;
        }

    &__Card {
        height: auto;
        max-width: 320px;
        border-radius: 15px;
        background: linear-gradient(314deg, rgba(48, 104, 216, 0.40) 10.15%, rgba(32, 88, 200, 0.31) 36.45%, rgba(23, 51, 105, 0.22) 66.07%, rgba(0, 0, 0, 0.04) 91.64%);
        backdrop-filter: blur(20px);
        margin: 0px auto 0px auto;
        display: flex;
        flex-direction: column;




        &__contenido {
            padding: 20px;
            
            div {
                display: flex;
                justify-content: center;
            }
            img {
                width: 10%;
                height: 30%;  
                margin: 0px 10px 0px 0px;
            }
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
@media (min-width: 1024px) {
    .container-proyectos {
        margin: 70px auto 0px auto;
    
    h1 {
        font-size: 64px;
    }
    &__Card {
        margin: 0px auto 0px auto;
    }

}
}
</style>