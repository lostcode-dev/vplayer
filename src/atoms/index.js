import Button from './Button.vue'
import PlayAutoSmart from './PlayAutoSmart.vue'
import ProgressBar from './ProgressBar.vue'
import ResumePlay from './ResumePlay.vue'
import Thumbnails from './Thumbnails.vue'
import Logo from './Logo.vue'
import LangSelector from './LangSelector.vue'


export default function install(app) {
  app.component('a-button', Button)
  app.component('a-play-auto-smart', PlayAutoSmart)
  app.component('a-progress-bar', ProgressBar)
  app.component('a-resume-play', ResumePlay)
  app.component('a-thumbnails', Thumbnails)
  app.component('a-logo', Logo)
  app.component('a-lang-selector', LangSelector)
}