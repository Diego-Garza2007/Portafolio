<script>
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
</script>

<template>
<div class="footer">

    <p>Derechos reservados &#169;</p>
    <div class="footer__icons">
    <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-2xl"/>
    <font-awesome-icon icon="fa-brands fa-github" class="fa-2xl"/>
    </div>
</div>
</template>

<style lang="scss">
@import '../Scss/Variables';

.fa-linkedin {
    color: $Secundary-color;
    margin: 0px 10px 0px 0px;
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
        margin: 25px 2% 0px 0px;

    }
    
}
</style>