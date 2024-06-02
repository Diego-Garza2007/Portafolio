<script>
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
</script>

<template>
<div class="footer">

    <p>{{ $t("footer.derechos") }} &#169;</p>
    <div class="footer__icons">
    <a target="_blank" href="https://www.linkedin.com/in/diego-garza-gudino-918a9720b/?originalSubdomain=mx"><font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2xl"/></a>
    <a target="_blank" href="https://github.com/Diego-Garza2007"><font-awesome-icon icon="fa-brands fa-github" class="fa-2xl"/></a>
    <a target="_blank" href="https://www.codewars.com/users/DiegoG07"><img src="/codewarsLogo.png"></a>
    </div>
</div>
</template>

<style lang="scss">
@import '../Scss/Variables';

.fa-linkedin {
    color: $Secundary-color;
}
.fa-github {
    color: black;
}
.footer {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
        color: rgb(95, 94, 94);
        margin: 30px 0px 0px 2%;
    }

    &__icons {
        margin: 25px 4% 0px 0px;
        width: auto;
        display: flex;
        justify-content: space-between;

        a {
            cursor: pointer;
            text-decoration: none;
            margin: 0px 15px 0px 0px;

            img {
                width: 35px;
                transform: translateY(-3px);
            }
        }
    }
    
}
</style>