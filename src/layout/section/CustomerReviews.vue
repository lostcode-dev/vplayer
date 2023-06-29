<template>
  <section class="w-full bg-emerald-50 pt-8 pb-20 mt-20 sm:mt-28 md:mt-36 mx-[auto] px-4">
    <div class="max-w-5xl mx-[auto] pt-3">
      <h1 class="text-center mb-3 font-bold text-2xl md:text-4xl">
        Todas Essas Pessoas Já Estão Utilizando Nosso Produto
      </h1>
      <p class="text-center font-semibold md:text-xl mb-10">
        O único player do mercado que lhe dá liberdade. E aqui está a prova:
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
        resume: 'Curabitur tincidunt cursus tortor sit amet placerat. ',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus maximus urna quis consequat. Aenean posuere imperdiet ipsum, in finibus sapien porttitor lobortis. Vestibulum laoreet blandit scelerisque. Morbi aliquet dolor sit amet purus cursus lobortis. Duis at orci turpis.',
        image:
          'src/assets/Review1.png',
        name: 'Tomás Silva',
        enterprise: 'PLR Powerhouse Strategies'
      },
      {
        resume: 'Etiam ullamcorper nunc justo.',
        review:
          'Duis volutpat at ipsum ut posuere. Suspendisse potenti. Suspendisse iaculis eros eu urna placerat, quis finibus nulla bibendum. Pellentesque vel justo nec ligula posuere vehicula. Morbi lacinia risus tortor, at placerat orci volutpat ac. Mauris et porta augue.',
        image:
        'src/assets/Review2.png',
        name: 'Anna Silva',
        enterprise: 'ProfitWave Marketing Agency'
      },
      {
        resume: 'In ultrices nibh nisi, vitae ultricies libero accumsan et.',
        review:
          'Ut pretium non nisl at imperdiet. Fusce nunc lorem, aliquam at aliquet et, laoreet ut urna. Nam finibus mollis metus, sit amet dapibus mi porttitor at. Donec vitae tellus nec neque porta efficitur. Integer massa lacus, feugiat ut quam sed, pulvinar fringilla quam. Sed rutrum vitae nibh at mollis. ',
        image: 'src/assets/Review3.png',
        name: 'Aline Martins',
        enterprise: 'AdVantage Media Group'
      },
      {
        resume: 'Nullam id libero sed tellus elementum pulvinar ac quis urna.',
        review:
          'Fusce mattis id justo at tristique. Integer malesuada rhoncus magna, et fringilla sapien facilisis ut. Aliquam quis aliquet erat. Maecenas et nulla a neque bibendum maximus id egestas massa.',
        image:
        'src/assets/Review4.png',
        name: 'Douglas Cardoso',
        enterprise: 'DigitalBoost Marketing Solutions'
      },
      {
        resume: 'Nunc tempor justo ac libero volutpat elementum. ',
        review:
          'Nullam lorem urna, suscipit eget placerat eget, tempus nec magna. Pellentesque ut euismod neque. Duis scelerisque mi non odio aliquam, ut vehicula orci dictum. Ut ullamcorper sapien eu enim luctus, tempor hendrerit nibh suscipit.',
        image:
        'src/assets/Review5.png',
        name: 'Marcos Oliveira',
        enterprise: 'TrafficPro Marketing Solutions'
      },
      {
        resume: 'Donec rutrum maximus erat, sed bibendum arcu venenatis vitae.',
        review:
          'Aenean at urna sit amet neque feugiat dignissim. Vivamus id tincidunt mi, sed imperdiet erat. Duis consequat accumsan dui, sit amet bibendum mi faucibus in. Sed quam massa, elementum id purus eget, volutpat mollis risus. Nunc non pulvinar nulla, eget dictum nunc. ',
        image:
        'src/assets/Review6.png',
        name: 'Danilo Lima ',
        enterprise: 'ProfitMaximizer Media'
      },
      {
        resume: 'Cras velit mi, interdum non fringilla vel, scelerisque ac tellus.',
        review:
          'Sed fermentum lorem non mollis varius. Morbi porta elementum felis. Pellentesque sed neque in neque dapibus commodo. Nullam justo lectus, pharetra sit amet libero ut, tempor porta mauris.',
        image:
        'src/assets/Review7.png',
        name: 'Mariana Dias',
        enterprise: 'PLR Express Digital Marketing'
      },
      {
        resume: 'Nulla egestas eget eros non sagittis.',
        review:
          'Sed at lobortis mauris. Phasellus a velit lectus. Fusce et tellus justo. Maecenas ullamcorper eget libero id condimentum. In sit amet ante nisi. Aliquam erat volutpat. Sed vel consectetur tortor. Nunc molestie vehicula est sit amet mollis. ',
        image:
        'src/assets/Review8.png',
        name: 'Miguel Fernandes',
        enterprise: 'VSL Mastery Marketing'
      }
    ])

    return {
      curtomersReviews
    }
  }
}
</script>