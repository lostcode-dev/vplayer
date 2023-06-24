<template>
  <swiper
    :modules="modules"
    :space-between="30"
    @slideChange="onSlideChange"
    :navigation="navigation"
    :autoplay="autoplayOptions"
    :breakpoints="getBreakPoints"
  >
      <slot />
  </swiper>
</template>
<script lang="ts">
// @ts-ignore
import { Navigation, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  components: {
    Swiper
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    slidesPerView: {
      type: Number,
      default: 5
    },
    navigation: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    const getBreakPoints = computed(() => ({
      // Responsive breakpoints

      320: {
        slidesPerView: props.slidesPerView - 3,
        spaceBetween: 10
      },
      480: {
        slidesPerView: props.slidesPerView - 2,
        spaceBetween: 20
      },

      768: {
        slidesPerView: props.slidesPerView - 1,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: props.slidesPerView,
        spaceBetween: 40
      }
    }))

    const onSlideChange = () => {
      console.log('slide change')
    }

    const autoplayOptions = computed(() => ({
      delay: 4000
    }))

    return {
      modules: [Navigation, Autoplay],
      onSlideChange,
      getBreakPoints,
      autoplayOptions
    }
  }
})
</script>