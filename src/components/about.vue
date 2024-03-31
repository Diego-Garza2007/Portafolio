<template>
    <section class="bg">
    <div class="container-about" >


        <div>
            <h1 class="container-about__title">{{ $t("nav.sobre") }}</h1>
            <p class="container-about__text">{{ $t("body.descripcion") }}</p>
        </div>

        <div>
            <h1 class="container-about__tecnologia">{{ $t("body.tecnologia") }}</h1>

        </div>

    </div>
    <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src="../../public/logos/HTML.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../../public/logos/CSS.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../../public/logos/JS.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../../public/logos/Git.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../../public/logos/Github.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="../../public/logos/Figma.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Linux.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Laravel.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Python.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Bash.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Docker.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Sass.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Typescrip.svg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="/logos/Vue.svg" height="100" width="250" alt="" />
		</div>
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
	background: linear-gradient(to right,  rgb(9, 44, 199) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 10s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
	background: $Primary-color;
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 1960px;
	
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
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 14);
	}
	
	.slide {
		height: 100px;
		width: 250px;
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