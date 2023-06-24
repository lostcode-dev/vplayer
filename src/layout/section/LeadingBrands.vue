<template>
  <section class="max-w-5xl my-14 sm:my-28 md:my-36 mx-[auto] pt-3 px-4">
    <h1 class="text-center font-bold mb-14 md:text-3xl text-xl">
      Vivamus porttitor sem et odio tempor.
    </h1>
    <c-swiper>
      <template v-for="(item, index) in leadingBrandsData" :key="index">
        <swiper-slide>
          <img :src="item.href" :alt="item.name" class="bg-emerald-50" width="170" height="130" />
        </swiper-slide>
      </template>
    </c-swiper>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'

export default defineComponent({
  components: {
    SwiperSlide
  },
  setup() {
    const leadingBrandsData = ref([
      {
        href: ' https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg ',
        name: ' img1 '
      },
      {
        href: ' https://caesegatos.com.br/wp-content/uploads/2023/01/the-gold-bengal-cat-on-white-background-1024x683.jpg ',
        name: ' img2 '
      },
      {
        href: ' https://www.petz.com.br/blog/wp-content/uploads/2022/02/gato-e-carnivoro2.jpg ',
        name: ' img3 '
      },
      {
        href: ' https://conteudo.imguol.com.br/c/entretenimento/28/2022/10/28/gato-preto-1666974144631_v2_4x3.jpg ',
        name: ' img4 '
      },
      {
        href: ' https://portalvet.royalcanin.com.br/wp-content/uploads/2022/07/british-short-hair-cortado-1110x450.jpeg ',
        name: ' img5 '
      },
      {
        href: ' https://seres.vet/blog/wp-content/uploads/2022/06/gato-irritado-1.jpg ',
        name: ' img6 '
      }
    ])

    return {
      leadingBrandsData
    }
  }
})
</script>