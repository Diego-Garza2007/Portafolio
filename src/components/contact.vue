<template>
    <section class="bg-gradient">
    <div class="container-contacto" id="contacto">
        <h1>{{ $t("body.contactame") }}</h1>

            <form
    action="https://formspree.io/f/mrgwkqje"
    method="POST"
    class="container-contacto__form"
    >
   
      
        <input type="email" name="email" class="container-contacto__email" placeholder="E-mail">
        <textarea name="message" v-bind:placeholder=" $t('body.contactame')" class="container-contacto__desc"></textarea>
  
    <!-- your other form fields go here -->
    <button type="submit" class="container-contacto__submit">{{  $t('body.enviar') }}</button>
    </form>
    </div>
    </section>

</template>