<script>
    import Projects from '../components/Projects.vue';
</script>

<template>
     <h1 class="title-proyect">{{ $t("body.proyectos") }}</h1>
<section class="container-proyectos" id="projects">
   
        

                <div class="container-proyectos__Card">

                    <img src="../assets/proyectgit.png" alt="" class="container-proyectos__MainImage">
                    <div class="container-proyectos__Card__contenido">
                        <p><a href="https://diego-garza2007.github.io/Front-mentor-Junior1/" target="_blank">Validacion de formulario</a></p>
                        <div>
                        <img src="../assets/Html.svg" alt="">
                        <img src="../assets/Css.svg" alt="">
                        <img src="../assets/JS.svg" alt="">
                    </div>
                    </div>
                </div>

                <div class="container-proyectos__Card">

                    <img src="../assets/Age-app.png" alt="">
                        <div class="container-proyectos__Card__contenido">
                            <p><a href="https://diego-garza2007.github.io/Front-mentor-Junior2/" target="_blank">Calculadora de edad</a></p>
                            <div>
                            <img src="../assets/Html.svg" alt="">
                            <img src="../assets/Css.svg" alt="">
                            <img src="../assets/JS.svg" alt="">
                        </div>
                    </div>
                </div>  
                <div class="container-proyectos__Card">

                    <img src="../assets/Age-app.png" alt="">
                        <div class="container-proyectos__Card__contenido">
                            <p><a href="https://diego-garza2007.github.io/Front-mentor-Junior2/" target="_blank">Calculadora de edad</a></p>
                            <div>
                            <img src="../assets/Html.svg" alt="">
                            <img src="../assets/Css.svg" alt="">
                            <img src="../assets/JS.svg" alt="">
                        </div>
                        </div>
                </div>  

                    <div class="container-proyectos__Card">

                    <img src="../assets/Age-app.png" alt="">
                        <div class="container-proyectos__Card__contenido">
                            <p><a href="https://diego-garza2007.github.io/Front-mentor-Junior2/" target="_blank">Calculadora de edad</a></p>
                            <div>
                            <img src="../assets/Html.svg" alt="">
                            <img src="../assets/Css.svg" alt="">
                            <img src="../assets/JS.svg" alt="">
                        </div>
                        </div>
                    </div> 
       
</section>

</template>

<style lang="scss">
@import '../Scss/_Variables.scss';

.title-proyect {
        text-align: center;
        font-size: 48px;
        color: $Secundary-color;
        margin: 150px 0px 100px 0px;
    }
.container-proyectos {
    width: 340;
    margin: 0px auto 0px auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(1,1fr);
 
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
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(3,1fr);
        gap: 30px;
    
}
}
 
@media (min-width: 1600px) {
    .title-proyect {
        font-size: 64px;
    }
    .container-proyectos {
        width: 1300px;
        margin: 70px auto 0px auto;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: repeat(4,1fr);
        gap: 30px;
    



}
} 
</style>