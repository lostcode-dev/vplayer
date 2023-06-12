import Icon from './Icon.vue'
import FastFowardTen from './FastFowardTen.vue'
import FullScreen from './FullScreen.vue'
import FullScreenExit from './FullScreenExit.vue'
import Pause from './Pause.vue'
import Play from './Play.vue'
import Reload from './Reload.vue'
import RewindTen from './RewindTen.vue'
import VolumeHigh from './VolumeHigh.vue'
import VolumeLow from './VolumeLow.vue'
import VolumeMedium from './VolumeMedium.vue'
import VolumeMute from './VolumeMute.vue'
import VolumeOff from './VolumeOff.vue'
import VolumeVariantOff from './VolumeVariantOff.vue'
import NavbarMenu from './NavbarMenu.vue'

export default function install(app) {
  app.component('i-icon', Icon)
  app.component('i-fast-foward-ten', FastFowardTen)
  app.component('i-full-screen', FullScreen)
  app.component('i-full-screen-exit', FullScreenExit)
  app.component('i-pause', Pause)
  app.component('i-play', Play)
  app.component('i-reload', Reload)
  app.component('i-rewind-ten', RewindTen)
  app.component('i-volume-high', VolumeHigh)
  app.component('i-volume-low', VolumeLow)
  app.component('i-volume-medium', VolumeMedium)
  app.component('i-volume-mute', VolumeMute)
  app.component('i-volume-off', VolumeOff)
  app.component('i-volume-variant-off', VolumeVariantOff)
  app.component('i-navbar-menu', NavbarMenu)
}