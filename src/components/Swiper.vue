<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="30"
    @swiper="onSwiper"
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
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

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
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      onSwiper,
      onSlideChange
    }
  }
}
</script>