<template>
  <!--Usado autoplayTimeout para corrigir bug de slides exibindo apenas o 'name'-->
  <swiper
    :modules="modules"    
    :navigation="navigation"
    :autoplay="autoplayOptions"
    :autoplayTimeout="3" 
    :breakpoints="getBreakPoints"
    :space-between="30"
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
    slidesPerView: {
      type: Number,
      default: 5
    },
    navigation: {
      type: Boolean,
      default: false
    },
    breakPoints: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const getBreakPoints = computed(() => {
      if (props.breakPoints && Object.keys(props.breakPoints).length > 0 ) {
        return props.breakPoints;
      }
      return{
        320: {
          slidesPerView: props.slidesPerView - 3
        },
        480: {
          slidesPerView: props.slidesPerView - 2
        },

        768: {
          slidesPerView: props.slidesPerView - 1
        },
        1200: {
          slidesPerView: props.slidesPerView
        }
      }  
    })
    

    const autoplayOptions = computed(() => ({
      delay: 4000
    }))

    return {
      modules: [Navigation, Autoplay],      
      getBreakPoints,
      autoplayOptions
    }
  }
})
</script>