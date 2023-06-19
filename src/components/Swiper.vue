<template>
  <swiper
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="30"
    @slideChange="onSlideChange"
    :navigation="navigation"
    :freeMode="true"
    autoplay
    :breakpoints="getBreakPoints"
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
import { computed } from 'vue'


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

    const getBreakPoints = computed( () => ({      
    // Responsive breakpoints
    
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }));

    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      modules: [Navigation, Autoplay],
      onSlideChange,
      getBreakPoints,
    }
  }
}
</script>