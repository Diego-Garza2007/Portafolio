import './Scss/global.scss'
import './Scss/Navbar.scss'
import './Scss/DarkMode.scss'
import './Scss/HomeView.scss'
import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMoon, faLanguage, faSun, faFile, faBars, faGlobe, faAward } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons"
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

const app = createApp(App)


library.add(faMoon, faLanguage, faSun, faFile, faBars, faGlobe ,fab, faAward)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
