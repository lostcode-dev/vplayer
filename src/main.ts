import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { makeServer } from "./server.js"

import Atoms from './atoms/index.js'
import Components from './components/index.js'
import Icons from './icons/index.js'
import Layout from './layout/index.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

makeServer()

app.use(createPinia())
app.use(router)

app.use(Atoms)
app.use(Components)
app.use(Icons)
app.use(Layout)

app.mount('#app')


