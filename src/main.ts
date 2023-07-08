import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { makeServer } from "./server.js"

import Atoms from './atoms/index.js'
import Components from './components/index.js'
import Icons from './icons/index.js'
import Layout from './layout/index.js'

import App from './App.vue'
import router from './router'
import messages from './i18n'

const lang = localStorage.getItem('lang') || 'pt-BR';

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: lang, // set locale
    fallbackLocale: lang, // set fallback locale
    messages, // set locale messages
})

const app = createApp(App)

makeServer()

app.use(createPinia())
app.use(router)

app.use(Atoms)
app.use(Components)
app.use(Icons)
app.use(Layout)
app.use(i18n)

app.mount('#app')


