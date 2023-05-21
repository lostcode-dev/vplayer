<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="navigation"
    :freeMode="true"
  >
    <swiper-slide v-for="(item, index) in (slidesPerView * 2)" :key="index">
      <slot />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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
      modules: [Navigation, Pagination, Scrollbar, A11y],
      onSwiper,
      onSlideChange
    }
  }
}
</script>