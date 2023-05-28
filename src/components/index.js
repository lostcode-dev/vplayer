import Swiper from './Swiper.vue'
import Controls from './Controls.vue'

export default function install(app) {
  app.component('c-swiper', Swiper)
  app.component('c-controls', Controls)
}