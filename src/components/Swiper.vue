<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="30"
    @slideChange="onSlideChange"
    :navigation="navigation"
    :freeMode="true"
    autoplay
  >
    <swiper-slide v-for="(item, index) in (slidesPerView * 2)" :key="index">
      <slot />
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
// @ts-ignore
import { Navigation, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'


export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    slidesPerView: {
      type: Number,
      default: 5
    },
    navigation: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      modules: [Navigation, Autoplay],
      onSlideChange
    }
  }
}
</script>