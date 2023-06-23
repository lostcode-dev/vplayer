<template>
  <swiper
    :modules="modules"    
    :space-between="30"
    @slideChange="onSlideChange"
    :navigation="navigation"
    :freeMode="true"
    :autoplay="{ delay: 3000 }"
    :breakpoints="getBreakPoints"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item"/>
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
import { defineComponent, computed } from 'vue'



export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
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
    leadingBrandsData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {

    const getBreakPoints = computed( () => ({      
    // Responsive breakpoints
    
      // when window width is >= 320px
      320: {
        slidesPerView: props.slidesPerView - 2,
        spaceBetween: 20
      },      
      // when window width is >= 640px
      640: {
        slidesPerView: props.slidesPerView - 1,  
        spaceBetween: 40
      },
      768: {
        slidesPerView: props.slidesPerView,  
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
})
</script>