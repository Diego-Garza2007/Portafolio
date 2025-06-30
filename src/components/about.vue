<template>
    <section class="bg" >
    <div class="container-about" >


        <div>
            <h1 class="container-about__title"><a>{{ $t("nav.sobre") }}</a></h1>
            <p class="container-about__text">{{ $t("body.descripcion") }}</p>
        </div>

        <div>
            <h1 class="container-about__tecnologia">{{ $t("body.tecnologia") }}</h1>

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
@import '../Scss/_Variables.scss';
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
            0% { background-position: 0 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0 50% }
        }
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

}
.div-icon {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100px;
        background: linear-gradient(307deg, rgba(255, 255, 255, 0.40) 20.69%, rgba(32, 88, 200, 0.31) 43.53%, rgba(23, 51, 105, 0.22) 69.23%, rgba(0, 0, 0, 0.04) 91.44%);
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px); 
        padding: 25px;
        margin: 0px 0px 0px 0px;

        img {
            margin: 0px 80px 0px 0px;
        }
    }
	@mixin white-gradient {
	background: linear-gradient(to right,  rgb(36, 63, 184) 0%,rgba(255,255,255,0) 100%);
}


$animationSpeed: 30s;

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
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