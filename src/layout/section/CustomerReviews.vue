<template>
  <section class="w-full bg-emerald-50 pt-8 pb-20 mt-20 sm:mt-28 md:mt-36 mx-[auto] px-4">
    <div class="max-w-5xl mx-[auto] pt-3">
      <h1 class="text-center mb-3 font-bold text-2xl md:text-4xl">
        Todas Essas Pessoas Já Estão Utilizando Nosso Produto
      </h1>
      <p class="text-center font-semibold md:text-xl mb-10">
        O único player do mercado que lhe dá liberdade.
      </p>

      <c-swiper
        :breakpoints="{
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }"
      >
        <swiper-slide v-for="(item, index) in curtomersReviews" :key="index">
          <div class="bg-white p-4 rounded-xl drop-shadow-lg m-1 mx-10 sm:mx-[auto]">
            <h5 class="text-center font-bold mb-4 text-lg">{{ item.resume }}</h5>
            <p class="text-center font-semibold">{{ item.review }}</p>
            <div class="mt-2 flex items-center justify-center">
              <img
                class="bg-white rounded-full mr-4"
                width="60"
                height="60"
                :src="item.image"
                alt=""
              />
              <div>
                <p class="font-bold">{{ item.name }}</p>
                <p class="font-semibold">{{ item.enterprise }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </c-swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

export default {
  components: {
    SwiperSlide
  },
  setup() {
    const curtomersReviews = ref([
      {
        resume: '"Aumentou a minha conversão"',
        review: 'Usei e comecei aproveitar mais as suas funcionalidades, no Dashboard consegui entender até onde a maioria dos meus leads assistiam os VSL com isso consegui melhorar ainda mais a minha copy, consequentemente aumentou a minha conversão.',
        image:
        'src/assets/Review2.png',
        name: 'Anna Silva',
        enterprise: 'ProfitWave Marketing Agency'
      },
      {
        resume: '"Ajudou a construir a cultura da empresa e a tornar as coisas pessoais"',
        review: 'O treinamento de funcionários costumava carecer de energia; eles se tornaram impessoais para apenas ver slides e ouvir vozes. Os vídeos ajudou a construir a cultura da empresa e a tornar as coisas pessoais novamente.',
        image:
        'src/assets/Review5.png',
        name: 'Marcos Oliveira',
        enterprise: 'TrafficPro Marketing Solutions'
      },
      {
        resume: '"Ajudou a educar e nos conectar com nossa comunidade"',
        review: 'O vídeo nos ajuda a educar e nos conectar com nossa comunidade de uma maneira mais autêntica.',
        image:
        'src/assets/Review6.png',
        name: 'Danilo Lima ',
        enterprise: 'ProfitMaximizer Media'
      },
      {
        resume: '"Melhor custo benefício hoje no mercado."',
        review: 'É a ferramenta com melhor custo benefício hoje no mercado. Uma funcionalidade que eu gostei foi a de poder continuar assistindo o vídeo de onde o usuário parou. Minhas conversões tiveram um aumento significativo, vale a pena o investimento.',
        image:
        'src/assets/Review4.png',
        name: 'Douglas Cardoso',
        enterprise: 'DigitalBoost Marketing Solutions'
      },
      {
        resume: '"É ótimo para nós porque tudo fica em um só lugar"',
        review: 'Do ponto de vista do marketing, É ótimo para nós porque tudo fica em um só lugar. Depois que o vídeo é feito, é muito fácil para nós compartilhar nas redes sociais e incorporar em sites.',
        image:
        'src/assets/Review7.png',
        name: 'Mariana Dias',
        enterprise: 'PLR Express Digital Marketing'
      },
      {
        resume: '"Super poderosa para transmitir nossos produtos"',
        review: 'Temos um produto inovador. É uma ferramenta super poderosa para transmitir como nossos produtos funcionam sem páginas intermináveis ​​de infográficos e texto.',
        image:
        'src/assets/Review8.png',
        name: 'Miguel Fernandes',
        enterprise: 'VSL Mastery Marketing'
      },
      {
        resume: '"Simplesmente sensacional!"',
        review: 'Ta simplesmente sensacional! Minha página ta carregando em 3 segundos. To aproveitando muito tráfego',
        image:
          'src/assets/Review1.png',
        name: 'Tomás Silva',
        enterprise: 'PLR Powerhouse Strategies'
      },
    ])

    return {
      curtomersReviews
    }
  }
}
</script>