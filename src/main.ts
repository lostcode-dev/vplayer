import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { makeServer } from "./server.js"

import App from './App.vue'
import router from './router'

const app = createApp(App)

makeServer()

app.use(createPinia())
app.use(router)

app.mount('#app')
