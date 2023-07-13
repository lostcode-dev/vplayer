<template>
  <section class="max-w-5xl my-14 sm:my-28 md:my-36 mx-[auto] pt-3 px-4">
    <h1 class="text-center font-bold mb-14 text-2xl md:text-4xl">
      Usado pelos melhores do Brasil
    </h1>
    <c-swiper>
      
      <swiper-slide v-for="(item, index) in leadingBrandsData" :key="index">
        <img :src="item.href" :alt="item.name" class="bg-emerald-50 w-32 h-32 m-auto object-cover rounded-xl" />
      </swiper-slide>
      
    </c-swiper>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'

export default {
  components: {
    SwiperSlide
  },
  setup() {
    const leadingBrandsData = ref([
      {
        href: ' /assets/logo1.png ',
        name: ' img1 '
      },
      {
        href: ' /assets/logo2.png ',
        name: ' img2 '
      },
      {
        href: ' /assets/logo3.jpg ',
        name: ' img3 '
      },
      {
        href: ' /assets/logo4.jpg ',
        name: ' img4 '
      },
      {
        href: ' /assets/logo5.jpg',
        name: ' img5 '
      },
      {
        href: ' /assets/logo6.png ',
        name: ' img6 '
      }
    ])

    return {
      leadingBrandsData
    }
  }
}
</script>