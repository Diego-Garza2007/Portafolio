<template>
    <section class="bg-gradient">
    <div class="container-contacto" id="contacto">
        <h1>{{ $t("body.contactame") }}</h1>

            <form
    action="https://formspree.io/f/mrgwkqje"
    method="POST"
    class="container-contacto__form"
    >
   
      
        <input type="email" name="email" class="container-contacto__email" placeholder="E-mail" required>
        <textarea name="message" v-bind:placeholder=" $t('body.contactame')" class="container-contacto__desc" required></textarea>
  
    <!-- your other form fields go here -->
    <button type="submit" class="container-contacto__submit">{{  $t('body.enviar') }}</button>
    </form>
    </div>
    </section>

</template>

<style lang="scss">
@import '../Scss/_Variables.scss';
.container-contacto {
    
    max-height: 700px;

    h1 {
        padding: 50px 0px 0px 0px;
        color: white;
        font-size: 48px;
        text-align: center;
    }

    &__form {
        width: 80%;
        margin: 3% auto 0px auto;
        display: flex;
        flex-direction: column;
    }
    &__email {
        font-size: 18px;
        height: 3.5rem;
        margin: 0px 0px 30px 0px;
        font-family: $font-Ubuntu;
        padding: 10px 0px 10px 10px;
        border-radius: 15px;
        border: none;

        &::placeholder {
            font-size: 20px;
        }
    } 
    &__desc {
        font-size: 18px;
        height: 3.5rem;
        margin: 0px 0px 30px 0px;
        padding: 10px 0px 200px 10px;
        font-family: $font-Ubuntu;
        resize: none;
        border-radius: 15px;
        border: none;
        scrollbar-width: none;

        &::placeholder {
            font-size: 20px;
        }
    }
    &__submit {
        margin: 5% auto 5% auto;
        border: none;
        border-radius: 7px;
        width: 250px;
        padding: 16px 18px;
        background-color: $Primary-color;
        color: white;
        font-size: 20px;
        

        &:hover {
            cursor: pointer;
            background-color: $Secundary-color;
            transition: 0.5s ease;
        }
    }
}
@media (min-width: 1024px) {
.container-contacto { 
    &__form {
        width: 45%;

    }
    h1 {
        font-size: 64px;
    }
}
}
</style>