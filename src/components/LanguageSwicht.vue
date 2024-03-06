<script>
    import { useI18n } from 'vue-i18n'
    import Tr from '../i18n/translation'
    import { useRouter } from "vue-router"

    export default {
        setup() {
            const { t, locale } = useI18n()

            const supportedLocales = Tr.supportedLocales

            const router = useRouter()

            const switchLanguage = async (event) => {
                const newLocale = event.target.value
                await Tr.switchLanguage(newLocale)

                try {
                    await router.replace( { params: { locale: newLocale }})
                } catch(e) {
                    console.error(e)
                    router.push("/")
                }
            }
            return { t, locale, supportedLocales, switchLanguage }
        }
    }

</script>

<template>
    <select @change="switchLanguage" class="nav__round">
        <option v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"

        >{{ t(`locale.${sLocale}`) }}</option>
    
    </select>
</template>

<style lang="scss">
    select {
        /* styling */
       
  background-color: white;
  border: thin solid rgb(236, 236, 236);
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  /* reset */
  margin: 0;      
  box-sizing: border-box;
   appearance: none;
   direction: ltr;

    }

    .nav__round {
  
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        radial-gradient(#dddddd 70%, transparent 72%);
     background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - .5em) .5em;
     background-size:
        5px 5px,
        5px 5px,
        1.5em 1.5em;
        background-repeat: no-repeat;

            :focus {
        background-image:
            linear-gradient(45deg, white 50%, transparent 50%),
            linear-gradient(135deg, transparent 50%, white 50%),
            radial-gradient(gray 70%, transparent 72%);
        background-position:
            calc(100% - 15px) 1em,
            calc(100% - 20px) 1em,
            calc(100% - .5em) .5em;
        background-size:
            5px 5px,
            5px 5px,
            1.5em 1.5em;
        background-repeat: no-repeat;
        border-color: green;
        outline: 0;
        }
    }
</style>