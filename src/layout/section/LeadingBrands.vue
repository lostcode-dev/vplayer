<template>
  <section class="max-w-5xl my-14 sm:my-28 md:my-36 mx-[auto] pt-3 px-4">
    <h1 class="text-center font-bold mb-14 md:text-3xl text-xl">
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
        href: ' https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn ',
        name: ' img1 '
      },
      {
        href: ' https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png ',
        name: ' img2 '
      },
      {
        href: ' https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg ',
        name: ' img3 '
      },
      {
        href: ' https://assets.turbologo.com/blog/pt/2019/11/19133547/gaming-logo-cover.jpg ',
        name: ' img4 '
      },
      {
        href: ' https://en.ephoto360.com/uploads/effect-data/en.ephoto360.com/0topvzyla/9-min62442e7dbefd2.jpg',
        name: ' img5 '
      },
      {
        href: ' https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo ',
        name: ' img6 '
      }
    ])

    return {
      leadingBrandsData
    }
  }
}
</script>